var CardServiceApi = require('../service/api/Card');

export get (req, res) {
	var api = new CardServiceApi();
	api.get(req.params.id, function(card){
		if(card) {
			res.send(card);
		} else {
			res.send(400);
		}
	});
}
