(function (module) {

  "use strict";

  var mongoose = require('mongoose')
    , CardSchema;

  CardSchema = new mongoose.Schema({
    title: { 'type': String },
    description: { 'type': String }
  });

  module.exports = mongoose.model('Card', CardSchema);

}(module));