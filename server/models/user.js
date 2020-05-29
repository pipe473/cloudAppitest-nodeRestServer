const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');




let Schema = mongoose.Schema;

let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
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

userSchema.methods.toJSON = function() {
    let usuario = this;
    let userObject = usuario.toObject();
    delete userObject.password;

    return userObject;
}


userSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser único'});

module.exports = mongoose.model( 'User', userSchema );