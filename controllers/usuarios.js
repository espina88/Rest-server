

import { response,request } from "express";


 const usuariosGet = (req, res = response ) => {

    res.json({
        msg: 'get API - Desde el controlador'
    });
};

const usuariosPut = (req, res) => {
    res.json({
        msg: 'put API - Desde el controlador'
    });
};

const usuariosPost = (req, res) => {

    const {name,edad} = req.body;
    const id = req.params.id;

    res.json({
        msg: 'post API - Desde el controlador',
        name,
        edad,
        id
    });
};

const usuariosDel = (req, res) => {

    res.json({
        msg: 'DELETE API - Desde el controlador',
    });
};

export {usuariosGet,usuariosPut,usuariosPost,usuariosDel}