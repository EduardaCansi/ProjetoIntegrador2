const express = require('express');
const routes = express.Router();
const controle = require('../controller/VeterinarioCont');

//aqui definem-se as rotas do modulo e o que executar no controller
routes.route('/veterinarios').get(controle.listar);
routes.route('/veterinarios').post(controle.incluir);
routes.route('/veterinarios').put(controle.alterar);
routes.route("/veterinarios/:id").delete(controle.excluir);

routes.route('/veterinarios/login').post(controle.login);

module.exports = routes;