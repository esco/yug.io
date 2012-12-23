define [
	'collections/Card'
],
(CardCollection) ->
	class Deck extends Backbone.Model

		urlRoot: '/deck'
		