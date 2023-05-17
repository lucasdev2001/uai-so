import { Schema, model } from "mongoose";
import Funcionario from "./Funcionario";

const conversaSchema = new Schema({
  funcionarios: [{ type: Schema.Types.ObjectId, ref: "Funcionario" }],
});

conversaSchema.pre("save", async function () {
  const destinatario = await Funcionario.findById(this.funcionarios[0]);
  const remetente = await Funcionario.findById(this.funcionarios[1]);

  destinatario.conversas.push(this._id);
  remetente.conversas.push(this._id);

  destinatario.save();
  remetente.save();
});

export default model("Conversa", conversaSchema);
