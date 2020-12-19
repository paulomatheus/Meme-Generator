require("dotenv").config();
const axios = require("axios");
const authAxios = axios.create({
  baseURL: process.env.AUTH_URL,
});

//Autenticação do usuário
module.exports = {
  login: (req, res) => {
    let { user, pass } = req.body;

    let token = `${user}${process.env.SECRET}${pass}`;

    let resposta = {
      user,
      token,
    };
    //Retorna um erro caso nao encontre o usuario
    if (!user || !pass) {
      return res.json(401, { msg: `Nao foi possivel localizar o usuario. Verifique a senha e/ou e-mail.` });
    }

    return res.json(200, resposta);
  },

  //Autenticacao do Token
  validateToken: (req, res, next) => {
    let token = req.headers.token;
    //Retorna um erro caso nao encontre o usuario
    if (!token) {
      return res.json(403, { msg: `Nao foi possivel encontrar o token. Verifique e tente novamente.` }); // Forbidden
    }

    next();
  },
};
