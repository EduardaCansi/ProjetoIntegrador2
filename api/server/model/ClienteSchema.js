const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    dataNascimento: { type: Date },
    telefone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    senha: String,
});

module.exports = mongoose.model("Cliente", ClienteSchema);