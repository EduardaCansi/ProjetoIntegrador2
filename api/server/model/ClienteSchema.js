const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
});

module.exports = mongoose.model("Cliente", ClienteSchema);