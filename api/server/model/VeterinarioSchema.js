const mongoose = require("mongoose");

const VeterinarioSchema = new mongoose.Schema({
    crmv: { type: Number, required: true },
    petShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetShop',
        require: true,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
});

module.exports = mongoose.model("Veterinario", VeterinarioSchema);