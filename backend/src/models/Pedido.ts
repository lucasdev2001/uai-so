import { Schema, model } from "mongoose";
const pedidoSchema = new Schema({
  senhaPedido: String,
  pratos: [],
  status: String,
  nomeCliente: String,
  descricao: String,
});

const Pedido = model("Pedido", pedidoSchema);

export default Pedido;
