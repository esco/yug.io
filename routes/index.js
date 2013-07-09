var Api = require("../api");
var builder = require("./builder");
var card = require("./card");

exports.init = function(app) {

  app.all('/api/*', function(req, res){
    Api.init(req, res);
  });

  app.get("/builder", builder.index);
  app.get("/card/:id", card.index);

};
