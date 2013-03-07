"use strict"

Card = require "../models/Card.js"

exports.list = (req, res) ->
	options = 
		start: req.params.start or 0
		limit: req.params.end or 50
		
	Card.find {}, {}, options, (err, cards) ->
		res.send cards