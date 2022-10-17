const Pet = require('../model/PetSchema');

module.exports = {
    listar: async (req, res) => {
        Pet.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate("cliente").sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Pet(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Pet(req.body);
        Pet.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Pet.deleteOne({ _id: req.params.id }, function (err) {
            err ? res.status(400).send(err) : res.status(200).json("message:ok");
        });
    },
};