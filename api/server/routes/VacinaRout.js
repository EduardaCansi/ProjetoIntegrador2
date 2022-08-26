const express = require('express');
const routes = express.Router();
const controle = require('../controller/VacinaCont');

routes.route('/vacinas').get(controle.listar);
routes.route('/vacinas').post(controle.incluir);
routes.route('/vacinas').put(controle.alterar);
routes.route("/vacinas/:id").delete(controle.excluir);

module.exports = routes;