var CardServiceModel = require('../service/model/Card');

exports.index = function(req, res) {
  var cardService = new CardServiceModel();

  cardService.list(5, 10, function(cards){
    res.send(cards || 400);
  });
}
