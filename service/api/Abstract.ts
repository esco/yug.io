var _ = require('underscore');

export class AbstractServiceApi {

	constructor () {
		var ignoreFns  = ['constructor', 'initializeEndpoint', 'respond'];
		for(var prop in this) {
			if(typeof(this[prop]) == 'function' && !_.contains(ignoreFns, prop)) {
				this.initializeEndpoint(prop);
			}
		}
	}

	public initializeEndpoint (fnName) {
		this[fnName] = _.wrap(this[fnName], function(func, params, reqOrFn, res){
			var fn = null;
			var req = null;

			if (typeof(reqOrFn) == 'function') {
				console.log('func?')
				fn = reqOrFn;
			} else {
				console.log('respond');
				fn = _.partial(this.respond, res);
				req = reqOrFn;
			}

			console.log('got ', params);
			func(params, fn, req, res);

		});
	}

	public respond (res, data) {
		res.send(data);
	}
}