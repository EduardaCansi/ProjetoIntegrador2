const AplicacaoVacina = require('../model/AplicacaoVacinaSchema');

module.exports = {
    listar: async (req, res) => {
        AplicacaoVacina.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate("pet").populate("vacina").populate("veterinario").sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    listarByPet: async (req, res) => {
        AplicacaoVacina.find({pet:req.params.id}, (err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate("pet").populate("vacina").populate("veterinario").sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new AplicacaoVacina(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new AplicacaoVacina(req.body);
        AplicacaoVacina.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        AplicacaoVacina.deleteOne({ _id: req.params.id }, function (err) {
            err ? res.status(400).send(err) : res.status(200).json("message:ok");
        });
    },
};