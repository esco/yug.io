define([
	'./CardModel'
], function(CardModel){

	var CardCollection = Backbone.Collection.extend({
		model: CardModel
		url: '/decks'
	});

	return CardCollection;
});
