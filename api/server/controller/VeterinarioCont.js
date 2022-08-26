const Veterinario = require('../model/VeterinarioSchema');

module.exports = {
    listar: async (req, res) => {
        Veterinario.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Veterinario(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Veterinario(req.body);
        Veterinario.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    /* login: async (req, res) => {
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
    }, */
};