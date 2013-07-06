var _ = require('underscore');
var env = process.env;
var fs = require('fs');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var express = require("express");
var logger = require('./lib/logger.js');
var mongoose = require("mongoose");
var routes = require("./routes");
var http = require("http");
var path = require("path");
var default_config = require('config').Default;
var production_config = require('config').Production;
var config = _.defaults(production_config, default_config);

if (process.env.NODE_ENV == 'development') {
  development_config = require('config').Development || {};
  developer_config = require('config')[process.env.NODE_DEVELOPER] || {};
  config = _.defaults(development_config, config);
  config = _.defaults(developer_config, config);
}


app = express();

//configure app
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

//routes
routes.init(app);

//connect to db
if(process.env.NODE_ENV == 'development') {
  mongoose.connect(config.dbHost, config.dbName, config.dbPort);
} else {
  mongoose.connect(config.dbUri, config.dbOptions || {});
}

function spawnWorkers() {
  var worker;
  for(var i = 0; i < numCPUs; i++) {
    worker = cluster.fork();
    worker.on('listening', function(address) {
      logger.info('Worker is listening for work: ', worker.pid, address);
    })
      .on('online', function(){
        logger.info('Worker is online', arguments);
      });
  }
}

if (cluster.isMaster) {
  spawnWorkers();
  cluster.on('exit', function(worker, code, sig) {
    logger.error('Worker exit... attempting to fork new process');
    cluster.fork();
  })
    .on('death', function(){
      logger.error('Worker died... attempting to fork new process');
      cluster.fork();
    });
} else {
  //start server
  http.createServer(app).listen(env.APP_PORT, config.host, null,  function() {
      logger.info("Server listening on port " + env.APP_PORT);
      fs.writeFileSync(env.APP_PID,  process.pid.toString(), 'utf8');
  });
}
