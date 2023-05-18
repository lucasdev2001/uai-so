import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const clienteSchema = new Schema({
  nome: String,
  email: String,
  senha: String,
  reservas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reserva",
    },
  ],
});

clienteSchema.pre("save", async function () {
  this.senha = await bcrypt.hash(this.senha, 12);
});

export default model("Cliente", clienteSchema);
