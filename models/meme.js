const { Schema, model } = require("mongoose");
//Esquema de uso no BD
const MemeSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    ano: Number,
  },
  {
    //Cria os campos createdAt e updatedAt.
    timestamps: true,
  }
);

module.exports = model("Meme", MemeSchema);