var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
evento = require('./Models/eventoModel'),
participante = require('./Models/participanteModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/msgdb', { useNewUrlParser: true });
mongoose.connect('mongodb://kidemais:Aj932602@35.243.179.179:27017/admin', { useNewUrlParser: true })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes2 = require('./Routes/eventoRoutes');
var routes1 = require('./Routes/cadastroRoutes');
routes1(app);
routes2(app);
app.listen(port);
console.log('Eventos RESTful API server started on: ' + port);

var opn = require('opn');

// opens the url in the default browser 
opn('http://localhost:3000/');

// specify the app to open in 
//opn('http://localhost:3000/', {app: 'firefox'});