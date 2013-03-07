define [
	'collections/Card'
],
(Cards) ->
	class Deck extends Backbone.Model
		urlRoot: '/deck'
		