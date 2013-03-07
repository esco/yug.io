define [
	'./Deck'
],
(Deck) ->
	class Deck extends Backbone.Collection
		model: Deck
		urlRoot: '/deck'
		