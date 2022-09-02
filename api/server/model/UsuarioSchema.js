const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    tipoUsuario: { type: String },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        ref: 'Veterinario'
    }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);