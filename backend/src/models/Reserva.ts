import { Schema, model } from "mongoose";
import { randomBytes } from "crypto";
const reservaSchema = new Schema({
  data: Date,
  estado: {
    type: String,
    enum: ["Aprovada", "Rejeitada", "Pendente"],
    default: "Pendente",
  },
  tipo: {
    type: String,
    enum: ["Mesa", "Pedido"],
  },
  cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
  senha: {
    type: String,
    default: () => randomBytes(4).toString("hex"),
  },
  mesa: {
    numeroMesa: Number,
    qtdPessoas: Number,
  },
});

export default model("Reserva", reservaSchema);
