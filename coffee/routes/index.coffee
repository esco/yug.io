"use strict"

common = require "./common"
user = require "./user"

exports.init = (app) ->
	app.get "/", common.index
	app.get "/users", user.list