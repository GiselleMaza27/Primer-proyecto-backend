const {request ,respose} = require("express");
const Usuarios = require("../models/usuario");
const bcrypt = require("bcryptjs");

const usuariosGet = async (req = request, res = response)=> {
    const {limite = 5, desde = 0}= req.query;

    const [total,usuarios]= await Promise.all([
        Usuarios.countDocuments({state: true}),
        Usuarios.find({state:true}).limit(limite).skip(desde),
    ]);

    res.status(200).json({
        total,
        usuarios,
    });
};


const usuarioPost = async (req = request, res)=>{
    const {name, email, password, role }= req.body;

    const Usuarios = new Usuario ({name, email, password, role});


    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
        message: "Usuario creado",
        usuario,

    });
};

const usuarioPut = async (req = request, res)=> {
    const {id}= req.params;

    const {password, _id, email, ...resto} = req.body
    
    const salt = bcrypt.genSaltSync();
    resto.password = bcrypt.hashSync(password, salt);

    const Usuarios = await Usuario.findByIdAndUpdate(id, resto, {new:true});
    
    
    res.status(200).json({
        message: "Usuario actualizado",
        usuario,
    });
};

const usuarioDelete = async (req, res)=>{
    const {id}= req.params;


    const usuarioBorrado = await Usuarios.findByIdAndUpdate(
        id,{
            state: false,
        },
        {new: true,}
            );
    res.status(200).json({
        message: "Usuario eliminado",
        usuarioBorrado ,
       });
 };

 module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
 };
