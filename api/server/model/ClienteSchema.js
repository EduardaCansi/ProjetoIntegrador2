const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: Number, required: true },
    dataNascimento: { type: Date },
    telefone: { type: Number, required: true },
    cep: { type: Number, required: true },
    uf: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    complemento: { type: String },
    email: { type: String, required: true, unique: true },
    senha: String,
});

module.exports = mongoose.model("Cliente", ClienteSchema);