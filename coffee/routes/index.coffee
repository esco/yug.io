"use strict"

common = require "./common"
cards = require "./cards"
card = require "./card"

exports.init = (app) ->
	app.get "/", common.index
	app.get "/card/id/:id", card.get
	app.get "/cards", cards.list