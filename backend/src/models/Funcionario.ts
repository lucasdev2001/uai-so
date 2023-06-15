import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const funcionarioSchema = new Schema({
  nome: String,
  grupo: String,
  email: String,
  senha: String,
});

funcionarioSchema.pre("save", async function () {
  this.senha = await bcrypt.hash(this.senha, 12);
});

export default model("Funcionario", funcionarioSchema);
