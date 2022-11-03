const Cliente = require('../model/ClienteSchema');

module.exports = {
    listar: async (req, res) => {
        Cliente.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Cliente(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Cliente(req.body);
        Cliente.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    obterPeloId: async (req, res) => {
        Cliente.findOne({ _id: req.params.id }, function (err, objetos) {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        });
    },

    filtrar: async (req, res) => {
        Cliente.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i" } },
                { email: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        })
    },

    excluir: async (req, res) => {
        Cliente.deleteOne({ _id: req.params.id }, function (err) {
            err ? res.status(400).send(err) : res.status(200).json("message:ok");
        });
    },

    /* login: async (req, res) => {
        Cliente.findOne({ email: req.body.email }, async function (err, obj) {
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