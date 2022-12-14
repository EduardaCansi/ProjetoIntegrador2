const Veterinario = require('../model/VeterinarioSchema');
const bcrypt = require("bcrypt");

module.exports = {
    listar: async (req, res) => {
        Veterinario.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Veterinario(req.body);
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
        obj.senha = await bcrypt.hash(obj.senha, salt);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Veterinario(req.body);
        if (obj.senha) {
            const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
            obj.senha = await bcrypt.hash(obj.senha, salt);
        }
        Veterinario.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Veterinario.deleteOne({ _id: req.params.id }, function (err) {
            err ? res.status(400).send(err) : res.status(200).json("message:ok");
        });
    },

    login: async (req, res) => {
        Veterinario.findOne({ email: req.body.email }, async function (err, obj) {
            if (err) return res.status(400).send(err);
            if (!obj) return res.status(400).send("Email inválido!");
            const senhaValidada = await bcrypt.compare(
                req.body.senha, obj.senha
            );
            if (!senhaValidada)
                return res.status(400).send("Senha inválida!");
            const token = obj.generateAuthToken();
            res.send(token);
        });
    },
};