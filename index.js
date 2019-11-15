'use strict'

//requiere y carga la libreria de moongose
var mongoose = require('mongoose'); 
var app = require('./app');//Ruta fichero app
var port = process.env.PORT || 3977;

//usa el servicio de mongoose para conectar mongoDB al proyecto 
mongoose.connect('mongodb://localhost:27017/curso_mean2',{useNewUrlParser: true,useUnifiedTopology:true },
(err, res) =>{
                    if(err){
                        throw err;
                    }else{
                        console.log('La conexion a la base de datos esta correctamenta..');
                        //se pone el servidor a escuchar
                        app.listen(port, function(){
                            console.log(`Servidor del API REST de musica escuchando en
                            http://:${port}`);
                        });
                    }
                });
