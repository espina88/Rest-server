
import roleSchema from '../models/role.js';
import Usuario from '../models/usuario.js';


const esRolValido = async ( rol = '') =>{
    const existeRol = await roleSchema.findOne( { rol } );

    if( !existeRol ){
        throw new Error( `El rol ${ rol } no está registrado en la base de datos`);
    }
}

//Verificar si el correo existe 

const existeMail = async( email = '' ) =>{
    const emailExiste = await Usuario.findOne( { email } );

    if( emailExiste ){
        throw new Error( `El correo ${ email } ya se encuentra registrado`);
    }
}

const existeIdMongo = async( id ) =>{
    const existeId = await Usuario.findById( id );

    if( !existeId ){
        throw new Error( `El id ${ id } no se encuentra en la base de datos`);
    }
}
 

export{ esRolValido, existeMail,existeIdMongo }