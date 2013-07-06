var logger = require('../../lib/logger');
var Card = require('../../model/Card');

function CardServiceModel() {}

CardServiceModel.prototype = {

	get: function(id, fn) {
		var query = {
			'attributes.card_number': id
		};

		Card.findOne(query, function (err, card) {
			if(err) { throw err; }
			fn(card);
		});
	},

	search: function(_query, start, limit, fn) {
		var query = {attributes:{}};
		var options = {
			skip: parseInt(start) || 0,
			limit: parseInt(limit) || 50
		};
		_query = _query? JSON.parse(_query) : {};

		if (_query.name) {
			query.attributes.name = new RegExp(_query.name, 'i');
		}

		Card.find(query, 'attributes', options, function(err, cards){
			if(err) {throw err};
			fn(cards);
		});
	},

	list: function(start, limit, fn) {
		this.search(null, start, limit, fn);
	}
}

module.exports = CardServiceModel;
