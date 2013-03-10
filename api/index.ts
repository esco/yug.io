var _str = require('underscore.string');
var querystring = require('querystring');

export class Api {
	// /api/card/id/3
	// /api/card/get/3
	// /api/card
	public function init (req, res) {
		var uriParts = req.params.uri.split('/');
		var endpoint = uriParts[1];
		var className = _str.capitalize(endpoint);
		var apiMethod = req.method;
		var isJSON = req.is('json') || req.is('appliction/json') || req.is('appliction/*');
		import apiClass = module('../service/api/' + className);

		if (uriParts.length > 2) {
			apiMethod = uriParts[2];
			segments = uriParts.splice(3, uriParts.length).join('/');
			params = querystring.parse(segments, '/');
		} else if (isJSON) {
			params = req.body;
		} else {
			//error, not json and params arent in url
		}

		apiInstance = new apiClass(params, req, res);
		apiInstance[apiMethod]();
		
	}

}