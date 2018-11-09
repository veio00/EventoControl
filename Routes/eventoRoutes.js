'use strict';
module.exports = function(app) {
var eventos = require('../controllers/eventoController');
// messages Routes
app.route('/eventoAdd').post(eventos.criarEvento);
app.route('/evento/update/:eventoId').put(eventos.editarEvento);
app.route('/evento/delete/:eventoId').delete(eventos.excluirEvento);
app.route('/evento').get(eventos.eventoAll);
app.route('/evento/:data').get(eventos.eventoData);
//app.route('/evento/:nome').get(eventos.eventoNome);
};