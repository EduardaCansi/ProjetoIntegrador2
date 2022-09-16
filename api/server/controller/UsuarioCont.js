const Usuario = require('../model/UsuarioSchema');

module.exports = {
    listar: async (req, res) => {
        Usuario.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Usuario(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Usuario(req.body);
        Usuario.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    filtrar: async (req, res) => {
        Usuario.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i" } },
                { email: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        })
    },

    /* login: async (req, res) => {
        Usuario.findOne({ email: req.body.email }, async function (err, obj) {
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