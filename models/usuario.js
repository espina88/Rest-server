
import mongoose from "mongoose";
const { Schema, model } = mongoose;
 
 
 
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es Obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['USER_ROLE', 'ADMIN_ROLE'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
 
usuarioSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}
 
 
 
export default model('Usuario', usuarioSchema);