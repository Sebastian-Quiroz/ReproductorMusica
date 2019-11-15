'use strict'

var express = require('express');
var useController = require('../Controlers/users');

var api = express.Router();
//rutas
api.get('/probandoControlador', useController.pruebas);
api.post('/register', useController.saveUser);

module.exports = api;