const express = require ("express");
const cors = require ("cors");
const {dbConnection } = require ("../database/config");

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuarioPath= '/api/usuarios';

        //Base de datos
        this.conectarDB();

        //Middlewares globales
        this.middlewares();

        //rutas
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }


    middlewares(){
        //cors
        this.app.use(cors());

        //leer datos del cuerpo en formato json 
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static("public"));
    }

  
    routes(){
        this.app.use(this.usuarioPath,require('../routes/usuarios'));

    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log('server online port:', this.port)
        });
    }
}

module.exports = Server;