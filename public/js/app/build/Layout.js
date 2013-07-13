define([
], function(){

	var Layout = Backbone.Marionette.Layout.extend({

		regions: {
			cardList: '#card-list',
			cardInfo: '#card-info'
		},

		initialize: function(data) {
			this.cardList.show(data.cardList);
			this.cardInfo.show(data.cardInfo);
		}

	});

	return Layout;
});
