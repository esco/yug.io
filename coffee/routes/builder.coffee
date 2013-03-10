"use strict"

Card = require "../models/Card.js"

exports.index = (req, res) ->
	options = 
		start: req.params.start or 0
		limit: req.params.limit or 50

	Card.find {}, 'attributes', options, (err, cards) ->
		console.log 'cards: ', cards
		res.render "builder",
			title: "Deck Builder"
			cards: cards