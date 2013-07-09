var CardServiceApi = require('../service/api/Card');

exports.index = function (req, res) {
	var cardServiceApi = new CardServiceApi();
	cardServiceApi.get({id: req.params.id}, function(card){
		console.log(card)
		res.render('card', {card: card || {}})
	});
}
