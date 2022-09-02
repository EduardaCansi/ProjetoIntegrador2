const mongoose = require("mongoose");

const PetShopSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cnpj: { type: String, required: true },
    rua: { type: String },
    cidade: { type: String },
    numero: { type: Number },
    telefone: { type: Number, required: true },
});

module.exports = mongoose.model("PetShop", PetShopSchema);