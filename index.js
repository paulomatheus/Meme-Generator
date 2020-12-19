const restify = require("restify");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const memeRouter = require("./routes/memeRoutes");

const DB = require("./database");
const server = restify.createServer();

//Rotas
authRouter.applyRoutes(server, "/auth");
memeRouter.applyRoutes(server);

//Parsers
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

// http:// => protocolo
// localhost => endereço do servidor
// :5000 => porta do servidor
// /NP2_EC021/meme => rota (recurso)

server.listen(process.env.PORTA, function () {
  console.log("Servidor rodando...");

  //Efetivar conexão com o BD
  mongoose.connect(DB.DB_URL, DB.DB_CONFIG, (error) => {
    if (!error) {
      console.log("MongoDB Conectado!");
    } else {
      //retorna o tipo de erro
      console.log(`Erro ao conectar no MongoDB:  ${error}`);
    }
  });
});
