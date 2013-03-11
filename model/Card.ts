var mongoose = require('mongoose');
var CardSchema = mongoose.Schema(
	{ 
		attributes: 
		{
			id: {type: 'Number'},
			card_number: {type:'String'},
			name: {type:'String'},
			type: {type:'String'},
			subtype: {type:'String'},
			rarity: {type:'String'},
			releaseid: {type:'Number'},
			description: {type:'String'}
		}
	},
	{
		toJSON: {virtuals:true}
	}
);
CardSchema.virtual('attributes.img').get(
	() => '/card_imgs/' + this.attributes.card_number + '.jpg'
);

export var Card = mongoose.model('Card', CardSchema);
