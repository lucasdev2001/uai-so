import { Schema, model } from "mongoose";

const funcionarioSchema = new Schema({
  nome: String,
  email: String,
  senha: String,
  conversas: [],
});

export default model("Funcionario", funcionarioSchema);
