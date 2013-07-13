define(function(){

	var Router = Backbone.Router.extend({

		activeApp: null,

		routes: {
			'match/*': 'match',
			'build/*': 'build',
			'arena/*': 'arena'
		},

		_before: function() {
			if (activeApp) {
				activeApp.destroy();
			}
		}

		match: function(params) {
			var app = require('./match/app');
			app.start(params);
		},

		build: function(params) {
			var app = require('./build/app');
			app.start(params);
		},

		arena: function(params) {
			var app = require('./arena/app');
			app.start(params);
		}

	});

	return Router;
});
