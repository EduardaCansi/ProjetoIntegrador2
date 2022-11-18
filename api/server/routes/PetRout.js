const express = require('express');
const routes = express.Router();
const controle = require('../controller/PetCont');

routes.route('/pets').get(controle.listar);
routes.route('/petsByCliente/:id').get(controle.listarByCliente);
routes.route('/pets').post(controle.incluir);
routes.route('/pets').put(controle.alterar);
routes.route("/pets/:id").delete(controle.excluir);
routes.route('/pets/:id').get(controle.obterPeloId);

module.exports = routes;