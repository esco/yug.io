(function (exports) {

  "use strict";

  var Card = require('../models/card.js');

  exports.list = function (req, res) {
    new Card({title: 'test-title', description: 'test-desc'}).save();
    Card.find(function(err, cards) {
        res.send(cards);
    });
  };
  
}(exports));