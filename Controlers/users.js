'use strict'

//carga el modelo creado de usuario

var bcrypt = require('bcrypt-nodejs');
var users = require('../Models/user');

function pruebas(req, res){
    res.status(200).send({
        message: 'Probandando una acion del controlador de usauriodel API REST con Node y Mongo'
    });
}

function saveUser(req,res){
    var user = new users();
    
    //recogen los parametros que llegan en la peticion
    var params = req.body;

    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    //verificar que el parametro contraseña existe y encriptar
    if(params.password){
        
    }else{
        res.status(500).send({message: 'Introduce la contraseña'});
    }

    //guardar los datos en base de datos con mongoose
}

//exporta los metodos que se van a usar
module.exports = {
    pruebas,
    saveUser
};