var logger = require('../../lib/logger.js');
var _ = require('underscore');

function AbstractServiceApi() {
	var ignoreFns  = ['constructor', 'initializeEndpoint', 'respond'];
	for(var prop in this) {
		if(typeof(this[prop]) == 'function' && !_.contains(ignoreFns, prop)) {
			this.initializeEndpoint(prop);
		}
	}
}

AbstractServiceApi.prototype = {

	initializeEndpoint: function(fnName) {
		this[fnName] = _.wrap(this[fnName], function(func, params, reqOrFn, res){
			var fn = null;
			var req = null;

			if (typeof(reqOrFn) == 'function') {
				logger.info('func?')
				fn = reqOrFn;
			} else {
				logger.info('respond');
				fn = _.partial(this.respond, res);
				req = reqOrFn;
			}

			logger.info('got ', params);
			func(params, fn, req, res);

		});
	},

	respond: function(res, data) {
		res.send(data);
	}

}

module.exports = AbstractServiceApi;
