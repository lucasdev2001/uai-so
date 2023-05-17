import { Schema, model } from "mongoose";

const funcionarioSchema = new Schema({
  nome: String,
  conversas: [],
});

export default model("Funcionario", funcionarioSchema);
