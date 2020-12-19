require("dotenv").config();
const axios = require("axios");
const authAxios = axios.create({
  baseURL: process.env.AUTH_URL,
});

//Autenticação
module.exports = {
  //validação dos dados do usuário, tendo como resposta um json confirmando ou retornando um erro!
  login: (req, res) => {
    let { user, pass } = req.body;

    let token = `${user}${process.env.SECRET}${pass}`;

    let resposta = {
      user,
      token,
    };

    if (!user || !pass) {
      return res.json(401, { msg: `Usuário ou senha inválidos.` }); // Unauthorized
    }

    return res.json(200, resposta);
  },

  //validação do token que retorna uma mensagem em json caso tenha erro no mesmo!
  validateToken: (req, res, next) => {
    let token = req.headers.token;

    if (!token) {
      return res.json(403, { msg: `Token inválido.` }); // Forbidden
    }

    next();
  },
};
