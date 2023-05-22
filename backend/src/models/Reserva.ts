import { Schema, model } from "mongoose";
import { randomBytes } from "crypto";
import Cliente from "./Cliente";
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
  qtdPessoas: Number,
});

reservaSchema.pre("save", async function () {
  Cliente.findById(this.cliente).then(cliente => {
    cliente.reservas.push(this._id);
    cliente.save();
  });
});

export default model("Reserva", reservaSchema);
