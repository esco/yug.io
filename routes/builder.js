var CardServiceModel = require('../service/model/Card');

exports.index = function(req, res) {
  var cardService = new CardServiceModel();
  cardService.list(Math.floor(Math.random()*100) + 200, 100, function(cards){
    res.render('build', {cards: cards || []});
  });
}
