var _ = require('underscore');
var util = require('util');
var AbstractServiceApi = require('./Abstract.js');
var CardServiceModel = require('../model/Card.js');
var serviceModel = new CardServiceModel();

function CardServiceApi() {
	CardServiceApi.super_.call(this);
}

util.inherits(CardServiceApi, AbstractServiceApi);

_.extend(CardServiceApi.prototype, {

	get: function(params, fn) {
		serviceModel.get(params.id, fn);
	},

	update: function(params, fn) {

	},

	search: function(params, fn) {
		serviceModel.search(params.squery, params.start, params.limit, fn);
	},

	list: function(params, fn) {
		serviceModel.list(params.start, params.limit, fn);
	}
});

module.exports = CardServiceApi;
