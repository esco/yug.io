define [
	'./Card'
], (Card) ->
	class Card extends Backbone.Collection
		model: Card
		urlRoot: '/deck'
		