

import express from 'express';
import { check } from 'express-validator';
import {usuariosGet, usuariosPost, usuariosPut, usuariosDel} from '../controllers/usuarios.js';
import { esRolValido,existeMail,existeIdMongo } from '../helpers/db-validators.js';
import validarCampos from '../Middlewares/validar-campos.js';


const router = express();

router.get( '/', usuariosGet );

router.put( '/:id',[
    check('id','El id no pertenece a Mongo').isMongoId(),
    check('id').custom(  existeIdMongo ),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPut ); 

router.post( '/',[
check('email','El email no es válido').isEmail(),
check('nombre', 'El nombre es obligatorio').not().isEmpty(),
check('password', 'El password debe de contener más de 6 letras').isLength( {min: 6} ),
check('rol').custom( esRolValido ),
check('email').custom( existeMail ),
validarCampos
] ,usuariosPost ); 

router.delete( '/:id', [
    check('id','El id no pertenece a Mongo').isMongoId(),
    check('id').custom(  existeIdMongo ),
    validarCampos
] ,usuariosDel ); 

export default router;