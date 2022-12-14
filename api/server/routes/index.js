const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require("cors");
routes.use(cors({ origin: "*" }));
//routes.use(cors({origin: 'http://localhost:3001'}));

const loginRout = require("./LoginRout");
routes.use("/api", loginRout);

//rotas para cada modulo
const clienteRout = require("./ClienteRout");
routes.use("/api", clienteRout);

const petRout = require("./PetRout");
routes.use("/api", petRout);

const vacinaRout = require("./VacinaRout");
routes.use("/api", vacinaRout);

const aplicacaoVacinaRout = require("./AplicacaoVacinaRout");
routes.use("/api", aplicacaoVacinaRout);

const veterinarioRout = require("./VeterinarioRout");
routes.use("/api", veterinarioRout);

module.exports = routes;