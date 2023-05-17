import { Schema, model } from "mongoose";

const mensagemSchema = new Schema({
  conversa: { type: Schema.Types.ObjectId, ref: "Conversa" },
  destinatario: { type: Schema.Types.ObjectId, ref: "Funcionario" },
  remetente: { type: Schema.Types.ObjectId, ref: "Funcionario" },
  conteudo: String,
});

export default model("Mensagem", mensagemSchema);
