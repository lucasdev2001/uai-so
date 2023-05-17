import { Schema, model } from "mongoose";

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

export default model("Cliente", clienteSchema);
