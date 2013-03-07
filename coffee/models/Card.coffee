"use strict"

mongoose = require 'mongoose'

buildImgUrl = (img)  ->


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
	,
		toJSON:
			virtuals: true

CardSchema.virtual('attributes.img').get () ->
	"/imgs/#{@attributes.card_number}.jpg"

module.exports = mongoose.model 'Card', CardSchema