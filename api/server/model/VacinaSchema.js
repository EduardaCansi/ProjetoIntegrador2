const mongoose = require("mongoose");

const VacinaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
});

module.exports = mongoose.model("Vacina", VacinaSchema);