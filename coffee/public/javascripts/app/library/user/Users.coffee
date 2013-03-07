define [
	'./User'
], (User) ->
	class User extends Backbone.Collection
		model: User