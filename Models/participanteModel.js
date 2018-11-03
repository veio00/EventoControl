var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var msgSchema = new Schema({
   nomeParticipante: {
      type: String
   },
   Email: {
      type: String
   },
   EventoParticipante: {
      type: String
   }
});
module.exports = mongoose.model('Participante', msgSchema);