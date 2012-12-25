"use strict"

Card = require "../models/card.js"

exports.list = (req, res) ->
	new Card(
	  title: "test-title"
	  description: "test-desc"
	).save()
	Card.find (err, cards) ->
	  res.send cards