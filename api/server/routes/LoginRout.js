const express = require('express');
const routes = express.Router();
const cliente = require('../controller/LoginClienteCont');
const veterinario = require('../controller/LoginVeterinarioCont');

//aqui definem-se as rotas do modulo e o que executar no controller

routes.route('/loginCliente').post(cliente.login);
routes.route('/loginVeterinario').post(veterinario.login);

module.exports = routes;