const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require("cors");
routes.use(cors({ origin: "*" }));
//routes.use(cors({origin: 'http://localhost:3001'}));

//rotas para cada modulo
const clienteRout = require("./ClienteRout");
routes.use("/api", clienteRout);

module.exports = routes;