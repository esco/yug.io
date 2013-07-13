define([
	'Layout',
	'CardListView',
	'CardInfoView',
	'../common/CardModel',
	'../common/CardCollection'
], function(Layout, CardListView, CardInfoView, CardModel, CardCollection){

	var App = new Backbone.Marionette.App();

	App.addInitializer(function(){
		var cardModel = new CardModel();
		var cardCollection = new CardCollection();

		var cardListView = new CardListView({
			collection: cardCollection
		});

		var cardInfoView = new CardInfoView({
			model: cardModel
		});

		var layout = new Layout({
			cardListView: cardListView,
			cardInfoView: CardInfoView
		});
	});

	return App;
})
