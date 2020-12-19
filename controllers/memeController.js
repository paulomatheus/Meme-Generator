const Meme = require("../models/meme");

module.exports = {
  //Cria novo meme
  create: async (req, res) => {
    {
      console.log("Na rota create...");
      let { titulo, descricao, ano } = req.body;
      let resposta = await Meme.create(req.body);
      return res.json(201, resposta);
    }
  },

  //Buscar os memes
  search: async (req, res) => {
    console.log("Na rota search...");
    let resposta = await Meme.find();
    return res.json(200, resposta);
  },

  //Buscar os memes pelo id
  searchWithId: async (req, res) => {
    console.log("Na rota search por ID...");
    let { id } = req.params;
    let resposta = await Meme.findById(id);
    return res.json(200, resposta);
  },

  //Atualizar o meme
  update: async (req, res) => {
    console.log("Na rota update...");
    let { id } = req.params;
    let resposta = await Meme.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(200, resposta);
  },

  //Remove atraves do id
  remove: async (req, res) => {
    console.log("Na rota delete...");
    let { id } = req.params;
    let resposta = { id, excluido: await Meme.findByIdAndDelete(id) };
    return res.json(200, resposta);
  },
};
