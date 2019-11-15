'use strict'

//Carga de librerias 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//---->cargar rutas
//configurando bodyParser
app.use(bodyParser.urlencoded({extended:false}));
//convierte las peticones que llegue en Arch. JSON
app.use(bodyParser.json());

//---->configurar las cabeceras Http

//----->rutas base
app.get('/pruebas', function(req, res){
    res.status(200).send({message: 'Bienvenido A tu primer servicio'});
    });

module.exports = app;

