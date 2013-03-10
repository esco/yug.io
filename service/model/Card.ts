import Card = module('../../model/Card');

export function get (id, fn) {
	Card.findOne({
			'attributes.card_number': id
		}, function (err, card) {
			if(err) { throw err; }
			fn(card);
		}
	});
}