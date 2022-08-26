const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    especie: { type: String, required: true },
    sexo: { type: String, required: true },
    porte: { type: String, required: true },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        require: true,
    },
});

module.exports = mongoose.model("Pet", PetSchema);