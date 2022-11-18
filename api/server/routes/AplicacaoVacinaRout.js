const express = require('express');
const routes = express.Router();
const controle = require('../controller/AplicaoVacinaCont');

routes.route('/aplicacaoVacinas').get(controle.listar);
routes.route('/aplicacaoVacinasByPet/:id').get(controle.listarByPet);
routes.route('/aplicacaoVacinas').post(controle.incluir);
routes.route('/aplicacaoVacinas').put(controle.alterar);
routes.route("/aplicacaoVacinas/:id").delete(controle.excluir);

module.exports = routes;