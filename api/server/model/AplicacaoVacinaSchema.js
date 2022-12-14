const mongoose = require("mongoose");

const AplicacaoVacinaSchema = new mongoose.Schema({
    dataAplicacao: { type: String, required: true },
    dataReaplicacao: { type: String },
    obs: { type: String },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        require: true,
    },
    vacina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vacina',
        require: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario',
        require: true,
    },
});

module.exports = mongoose.model("AplicacaoVacina", AplicacaoVacinaSchema);