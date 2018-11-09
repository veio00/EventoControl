'use strict';
module.exports = function(app) {
var cadastro = require('../controllers/cadastroController');
// messages Routes
app.route('/Cadastro/add').post(cadastro.cadastrarParticipante);
app.route('/Cadastro/update/:participanteId').put(cadastro.editarParticipante);
app.route('/Cadastro/delete/:participanteId').delete(cadastro.excluirParticipante);
app.route('/Cadastro/:evento').get(cadastro.Participantes);
app.route('/Cadastro/:nome').get(cadastro.Participante);
};