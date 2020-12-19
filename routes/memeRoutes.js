const { Router } = require("restify-router");

const MemeController = require("../controllers/memeController");
const AuthController = require("../controllers/authController");

const RouterInstance = new Router();

//Cria o meme
RouterInstance.post(
  "/meme",
  AuthController.validateToken,
  MemeController.create
);

//Atualiza o meme
RouterInstance.patch(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.update
);

//Busca os memes
RouterInstance.get(
  "/meme",
  AuthController.validateToken,
  MemeController.search
);

//Busca os memes por id
RouterInstance.get(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.searchWithId
);

//Remove um meme
RouterInstance.del(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.remove
);
module.exports = RouterInstance;
