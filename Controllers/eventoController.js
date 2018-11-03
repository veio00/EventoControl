'use strict';
var mongoose = require('mongoose'),
    Evento = mongoose.model('evento');

exports.criarEvento = function (req, res) {
    var new_msg = new Evento(req.body);
    new_msg.save(function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
exports.editarEvento = function (req, res) {
    Evento.findOneAndUpdate({ _id: req.params.eventoId }, req.body, { new: true }, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
exports.excluirEvento = function (req, res) {
    Evento.remove({
        _id: req.params.eventoId
    }, function (err, msg) {
        if (err)
            res.send(err);
        res.json({ message: 'Message successfully deleted' });
    });
};
exports.eventoAll = function (req, res) {
    Evento.find({}, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};

exports.eventoData = function (req, res) {
    Evento.findById(req.params.eventoId, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};