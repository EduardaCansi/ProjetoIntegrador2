const express = require('express');
const routes = express.Router();
const controle = require('../controller/UsuarioCont');

//aqui definem-se as rotas do modulo e o que executar no controller
routes.route('/usuarios').get(controle.listar);
routes.route('/usuarios').post(controle.incluir);
routes.route('/usuarios').put(controle.alterar);
routes.route('/usuarios/filtro/:filtro').get(controle.filtrar);

//routes.route('/usuarios/login').post(controle.login);

module.exports = routes;