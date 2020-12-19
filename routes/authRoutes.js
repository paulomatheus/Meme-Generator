const { Router } = require("restify-router");
const AuthController = require("../controllers/authController");

const RouterInstance = new Router();

RouterInstance.post("/login", AuthController.login);

module.exports = RouterInstance;
