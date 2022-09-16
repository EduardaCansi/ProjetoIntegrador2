const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    telefone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    tipoUsuario: { type: Number },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        ref: 'Veterinario'
    }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);