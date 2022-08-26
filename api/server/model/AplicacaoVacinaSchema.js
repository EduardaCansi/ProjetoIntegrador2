const mongoose = require("mongoose");

const AplicacaoVacinaSchema = new mongoose.Schema({
    dataAplicacao: { type: Date, required: true },
    dataReaplicacao: { type: Date },
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