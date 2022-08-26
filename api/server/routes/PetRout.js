const express = require('express');
const routes = express.Router();
const controle = require('../controller/PetCont');

routes.route('/pets').get(controle.listar);
routes.route('/pets').post(controle.incluir);
routes.route('/pets').put(controle.alterar);
routes.route("/pets/:id").delete(controle.excluir);

module.exports = routes;