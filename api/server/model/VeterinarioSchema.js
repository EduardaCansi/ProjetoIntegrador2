const mongoose = require("mongoose");

const VeterinarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: Number },
    email: { type: String, required: true, unique: true },
    crmv: { type: Number, required: true },
    cpf: { type: String, required: true },
    petShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetShop',
        require: true,
    },
});

module.exports = mongoose.model("Veterinario", VeterinarioSchema);