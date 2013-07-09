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

	search: function(sQuery, start, limit, fn) {
		var query = {};
		var options = {
			skip: parseInt(start) || 0,
			limit: parseInt(limit) || 50
		};
		sQuery = sQuery? sQuery : {};

		if (sQuery.name) {
			query['attributes.name'] = new RegExp(sQuery.name, 'i');
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
