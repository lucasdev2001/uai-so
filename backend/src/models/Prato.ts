import { Schema, model } from "mongoose";

const pratoSchema = new Schema({
  nome: String,
  foto: String,
  descricao: String,
  categoria: String,
  preco: String,
});

const Prato = model("Prato", pratoSchema);

export default Prato;
