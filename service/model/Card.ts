var Card = require('../../model/Card');

export class CardServiceModel {

	public get (id, fn) {
		var query = {
			'attributes.card_number': id
		};

		Card.findOne(query, function (err, card) {
			if(err) { throw err; }
			fn(card); 
		});
	}

	public search(query, start, limit, fn) {
		var options = {
			skip: parseInt(start) || 0,
			limit: parseInt(limit) || 50
		};
		
		query = query? JSON.parse(query) : {};

		Card.find(query, 'attributes', options, function(err, cards){
			if(err) {throw err};
			fn(cards);
		});
	}

	public list (start, limit, fn) {
		this.search(null, start, limit, fn);
	}

}