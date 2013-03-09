"use strict"

common = require "./common"
cards = require "./cards"
card = require "./card"
builder = require "./builder"

exports.init = (app) ->
	app.get "/", common.index
	app.get "/card/id/:id", card.get
	app.get "/cards", cards.list
	app.get "/cards/start/:start/limit/:limit", cards.list
	#app.get "/arena", arena.index
	app.get "/builder", builder.index