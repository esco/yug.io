"use strict"

Card = require "../models/Card.js"

exports.list = (req, res) ->
	console.log 'gotten'
	Card.findOne {}, (err, cards) ->
		res.send cards