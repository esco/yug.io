require('typescript-require')({
  nodeLib: true
});

var _ = require('underscore');
var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var http = require("http");
var path = require("path");
var default_config = require('config').Default;
var production_config = require('config').Production;
var config = _.defaults(production_config, default_config);

if (process.env.NODE_ENV = 'development') {
  development_config = require('config').Development || {};
  developer_config = require('config')[process.env.NODE_DEVELOPER] || {};
  config = _.defaults(development_config, config);
  config = _.defaults(developer_config, config);
}

app = express();

app.configure(function() {
  app.set("port", config.port);
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.favicon());
  app.use(express.logger("dev"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  return app.use(express["static"](path.join(__dirname, "public")));
});

app.configure("development", function() {
  return app.use(express.errorHandler());
});

routes.init(app);

if(process.env.NODE_ENV == 'development') {
  mongoose.connect(config.dbHost, config.dbName, config.dbPort);
} else {
  mongoose.connect(config.dbUri, config.dbOptions || {});
}

http.createServer(app).listen(app.get("port"), config.host, null,  function() {
  return console.log("Express server listening on port " + app.get("port"));
});