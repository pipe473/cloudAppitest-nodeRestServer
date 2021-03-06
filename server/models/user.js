const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;


let userSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },

  email: {
    type: String,
    unique: true,
    required: [true, "El correo es necesario"]
  },
  birthDate: {
    type: Date
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"]
  },
  information: { type: Schema.Types.ObjectId, ref: 'Information' },
});

userSchema.methods.toJSON = function () {
  let usuario = this;
  let userObject = usuario.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, { message: "{PATH} debe de ser único" });

module.exports = mongoose.model("User", userSchema);
