"use strict"

Card = require "../models/Card.js"

exports.get = (req, res) ->
	cardId = req.params.id
	Card.findOne {'attributes.card_number': cardId}, (err, card) ->
		if card
			res.send card
		else
			res.send 400