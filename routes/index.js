var Api =  require("../api");
var builder = require("./builder");

exports.init = function(app) {
  app.all('/api/*', function(req, res){
    Api.init(req, res);
  });

  app.get("/builder", builder.index);

  app.get("/test", function(req, res){
    res.render('test', {
      title: 'jQuery Sandbox'
    });
  });
  /*
  app.get("/", common.index);
  app.get("/card/id/:id", card.get);
  app.get("/cards", cards.list);
  app.get("/cards/start/:start/limit/:limit", cards.list);
  return app.get("/builder", builder.index);
  */
};
