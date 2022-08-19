const express = require('express');
const routes = express.Router();
const controle = require('../controller/ClienteCont');

//aqui definem-se as rotas do modulo e o que executar no controller
routes.route('/clientes').get(controle.listar);
routes.route('/clientes').post(controle.incluir);
routes.route('/clientes').put(controle.alterar);
routes.route('/clientes/:id').get(controle.obterPeloId);
routes.route('/clientes/filtro/:filtro').get(controle.filtrar);

//routes.route('/clientes/login').post(controle.login);

module.exports = routes;