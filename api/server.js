console.log("Server executado com sucesso");

//usar o express
const express = require('express');

//usar o mongo
require("./server/banco/mongo");
//usar as rotas
const routes = require("./server/routes/index");

const app = express();

//liberar origens para requisição
var cors = require("cors");

app.use(express.json()); // para tratar json

routes.use(cors({ origin: "*" }));
//routes.use(cors({origin: 'http://localhost:3001'}));

require("dotenv").config();
// definir porta para a API de serviço
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    return console.log("API executando na porta " + port);
});