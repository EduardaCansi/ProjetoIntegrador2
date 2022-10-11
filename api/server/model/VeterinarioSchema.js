const mongoose = require("mongoose");

const VeterinarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    crmv: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

module.exports = mongoose.model("Veterinario", VeterinarioSchema);