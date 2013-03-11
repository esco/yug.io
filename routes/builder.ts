export function index (req, res) {
  var cardService = new (require('../service/model/Card').CardServiceModel);

  cardService.list(5, 10, function(cards){
    res.send(cards || 400);
  });
}