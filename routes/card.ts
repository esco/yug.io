import CardServiceApi = module('../service/api/Card');

export get (req, res) {
	id = req.params.id;
	new CardServiceApi({id:id}, function(card){
		if(card) {
			res.send(card);
		} else {
			res.send(400);
		}
	}).get();
}