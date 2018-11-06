'use strict';
var mongoose = require('mongoose'),
    Cadastro = mongoose.model('Participante');
exports.Participantes = function (req, res) {
    Cadastro.find({}, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
        
    });
};
exports.cadastrarParticipante = function (req, res) {
    var new_msg = new Cadastro(req.body);
    new_msg.save(function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
exports.Participante = function (req, res) {
    Cadastro.findById(req.params.participanteId, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
exports.editarParticipante = function (req, res) {
    Cadastro.findOneAndUpdate({ _id: req.params.participanteId }, req.body, { new: true }, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
exports.excluirParticipante = function (req, res) {
    Cadastro.remove({
        _id: req.params.participanteId
    }, function (err, msg) {
        if (err)
            res.send(err);
        res.json({ message: 'Message successfully deleted' });
    });
};