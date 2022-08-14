

import { response,request } from "express";
import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs';




 const usuariosGet = async (req, res = response ) => {
    const { limite = 4, desde = 0 } = req.query;
    const query = { estado: true };
    

    
    const [ usuarios,total ] = await Promise.all([
        Usuario.find( query )
            .skip( Number(desde) )
            .limit( limite ),
        Usuario.countDocuments( query )
    ]);

    res.json({
        total,
        usuarios
    });
};

const usuariosPut = async (req, res) => {

    const { id } = req.params;
    const {  _id, password, google, email, ... resto} = req.body;

    //Validar contra base de datos
    if( password ){
        //Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }
    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
};

const usuariosPost = async(req, res) => {

    const { nombre, email, password, rol } = req.body;
    const id = req.params.id;
    const usuario = new Usuario( { nombre, email, password, rol } );


    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardar en BD

    await usuario.save();

    res.json({
        msg: 'post API - Desde el controlador',
        usuario,
    });
};

const usuariosDel = async (req, res) => {
    
    const { id } = req.params;

    //Fisicamente lo borramos
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json({
        msg: 'DELETE API - Desde el controlador',
        usuario
    });
};

export {usuariosGet,usuariosPut,usuariosPost,usuariosDel}