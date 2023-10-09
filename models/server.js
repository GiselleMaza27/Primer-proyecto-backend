const express = require ('express')

class Server{
    constructor(){
        this.app=express()
        this.port=8080;
        this.usuarioPath= '/api/usuarios'
        this.middlewares()
        this.routes()

    }
    middlewares(){
        this.app.use(express.static("public"));
    }
    routes(){
        this.app.use(this.usuarioPath,require('../routes/usuarios'))
      



    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('server online port:', this.port)
        })
    }
}

module.exports = Server