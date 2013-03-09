#Module dependencies.
_ = require 'underscore'
express = require "express"
mongoose = require "mongoose"
routes = require "./routes"
http = require "http"
path = require "path"

#config
default_config = require('config').Default
production_config = require('config').Production
config = _.defaults production_config, default_config
console.log process.env.NODE_ENV
if process.env.NODE_ENV = 'development'
  development_config = require('config').Development or {}
  developer_config = require('config')[process.env.NODE_DEVELOPER] or {}
  config = _.defaults development_config, config
  config = _.defaults developer_config, config

app = express()

app.configure ->
  app.set "port", config.port
  app.set "views", __dirname + "/views"
  app.set "view engine", "jade"
  app.use express.favicon()
  app.use express.logger "dev"
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static path.join(__dirname, "public")

app.configure "development", ->
  app.use express.errorHandler()

routes.init app

#mongoose.connect config.dbHost, config.dbName, config.dbPort
mongoose.connect config.dbUri, config.dbOptions or {}

http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
