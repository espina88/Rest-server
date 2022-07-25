

import express from 'express';
import {usuariosGet, usuariosPost, usuariosPut, usuariosDel} from '../controllers/usuarios.js'

 const router = express();

router.get( '/', usuariosGet );

router.put( '/', usuariosPut ); 

router.post( '/:id', usuariosPost ); 

router.delete( '/', usuariosDel ); 

export default router;