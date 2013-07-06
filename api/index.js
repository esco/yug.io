var _ = require('underscore');
var _str = require('underscore.string');
var logger = require('../lib/logger.js');

function init(req, res) {
	var uriParts = req.params.toString().split('/');
	var endpoint = uriParts[0];
	var className = _str.capitalize(endpoint);
	var apiMethod = null;
	var params = null;
	var isJSON = req.is('json') || req.is('appliction/json') || req.is('appliction/*');
	var apiClass = require('../service/api/' + className + '.js');

	if(isJSON) {
		logger.info('is JSON!');
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

			params = _.defaults(req.query, parseSegments(segments));

			if(!params) {
				logger.error('no params');
			}

		} else {
			logger.error('request is not json and no method specified');
		}
	}

	logger.info('apiClass', className);
	logger.info('params', params);
	logger.info('apiMethod', apiMethod);

	var apiInstance = new apiClass();
	if (apiInstance[apiMethod] && typeof(apiInstance[apiMethod]) === 'function' ) {
		apiInstance[apiMethod](params, req, res);
	} else {
		logger.error('api method doesn\'t exist');
	}
}

function parseSegments(segments, delim) {
	var delim = delim || '/';
	var params = {};
	var parts = segments.split(delim);
	var len = parts.length;

	for(var i = 0; i < len; i+=2) {
		params[parts[i]] = parts[i+1];
	}

	return params;
}

exports.init = init;
exports.parseSegments = parseSegments;


// card/get/id/3
// /card/search/search/
// player/
// deck/addcard
// deck/removecard
