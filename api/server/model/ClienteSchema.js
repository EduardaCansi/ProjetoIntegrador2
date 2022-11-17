const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

ClienteSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, nome: this.nome },
    process.env.JWT_PRIV_KEY, { expiresIn: process.env.TOKEN_EXPIRE }
    );
    return token;
};

module.exports = mongoose.model("Cliente", ClienteSchema);