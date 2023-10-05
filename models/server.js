const express = require ('express')

class Server{
    constructor(){
        this.app=express()
        this.port=8080;
        this.middlewares()

    }
    middlewares(){
        this.app.use(express.static("public"));
    }
    routes(){
        this.app.get("/api/usuarios",function(req,res){
            res.json({
                message:'get',
            })
       
        })
        this.app.post("/api/usuarios",function(req,res){
            res.json({
                message:'post',
            })
       
        })
        this.app.put("/api/usuarios",function(req,res){
            res.json({
                message:'put',
            })
       
        })
        this.app.delete("/api/usuarios",function(req,res){
            res.json({
                message:'delete',
            })
       
        })




    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('server online port:', this.port)
        })
    }
}

module.exports = Server