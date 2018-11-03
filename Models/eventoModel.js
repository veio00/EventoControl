'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventoSchema = new Schema({
   nome: {
      type: String
   },
   descricao: {
      type: String
   },
   data: {
      type: Date,
      default: Date.now
   },
   estado: {
    type: String 
 },
});
module.exports = mongoose.model('evento', eventoSchema);