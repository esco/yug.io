"use strict"

mongoose = require 'mongoose'

CardSchema = mongoose.Schema
	attributes:
		id: type: 'Number'
		card_number: type: 'String'
		name: type: 'String'
		type: type: 'String'
		subtype: type: 'String'
		rarity: type: 'String'
		releaseid: type: 'Number'
		description: type: 'String'

module.exports = mongoose.model 'Card', CardSchema