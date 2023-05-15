import { Schema, model } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const clienteSchema = new Schema({
  nome: String,
  email: String,
  senha: String,
  reservas: [
    { type: Schema.Types.ObjectId, ref: "Reserva", autopopulate: true },
  ],
});

clienteSchema.plugin(mongooseAutoPopulate);

const Cliente = model("Cliente", clienteSchema);

export default Cliente;
