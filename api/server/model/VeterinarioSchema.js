const mongoose = require("mongoose");

const VeterinarioSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
});

module.exports = mongoose.model("Veterinario", VeterinarioSchema);