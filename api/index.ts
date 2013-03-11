var _ = require('underscore');
var _str = require('underscore.string');

export class Api {
	// card/get/id/3
	// /card/search/search/
	// player/
	// deck/addcard
	// deck/removecard
	
	public init (req, res) {
		var uriParts = req.params.toString().split('/');
		var endpoint = uriParts[0];
		var className = _str.capitalize(endpoint);
		var apiMethod = null;
		var params = null;
		var isJSON = req.is('json') || req.is('appliction/json') || req.is('appliction/*');
		var apiClass = require('../service/api/' + className + '.ts')[className+'ServiceApi'];
		
		if(isJSON) {
			console.log('is JSON!');
			
			params = _.defaults(req.query, req.body);

			if (uriParts.length > 1) {
				apiMethod = uriParts[1];
			} else {
				apiMethod = req.method.toString().toLowerCase();
			}
		} else {

			if (uriParts.length > 1) {
				var segments = uriParts.splice(2, uriParts.length).join('/');
				apiMethod = uriParts[1];

				params = _.defaults(req.query, this.parseSegments(segments));

				if(!params) {
					console.log('err, no params');
				}

			} else {
				console.log('error, not json and no method specified');
			}
		}
		console.log('apiClass', className);
		console.log('params', params);
		console.log('apiMethod', apiMethod);

		var apiInstance = new apiClass();
		if (apiInstance[apiMethod] && typeof(apiInstance[apiMethod]) == 'function' ) {
			apiInstance[apiMethod](params, req, res);
		} else {
			console.log('error, method doesn\'t exist');
		}
	}

	public parseSegments (segments, delim='/') {
		var params = {};
		var parts = segments.split(delim);
		var len = parts.length;

		for(var i = 0; i < len; i+=2) {
			params[parts[i]] = parts[i+1];
		}

		return params;
	}
}