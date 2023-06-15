import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//controllers
import clienteController from "./controllers/clienteController";
import funcionarioController from "./controllers/funcionarioController";
import pratoController from "./controllers/pratoController";
import { createServer } from "http";
import { Server } from "socket.io";
import Prato from "./models/Prato";
import Pedido from "./models/Pedido";
import imagesController from "./controllers/imagesController";
import pedidosController from "./controllers/pedidosController";
import Funcionario from "./models/Funcionario";

//env variables
const { PORT, MONGO_URI } = process.env;
const mongo_uri = String(MONGO_URI);

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

mongoose.connect(mongo_uri).catch(error => console.log(error));

//middleweres
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

//rotas
app.use("/clientes", clienteController);
app.use("/funcionarios", funcionarioController);
app.use("/pratos", pratoController);
app.use("/images", imagesController);
app.use("/pedidos", pedidosController);

app.get("/", (req, res) => {
  res.send("i am alive");
});

io.on("connection", socket => {
  socket.on("mudarStatusPedido", async msg => {
    const pedido = await Pedido.findByIdAndUpdate(
      msg._id,
      { status: msg.status },
      { new: true }
    );
    console.log(pedido);
    io.emit("atualizarPedidos", "uma atualização foi feita do pedido");
  });
});

Pedido.watch().on("change", data => {});
Prato.watch().on("change", data => {
  io.emit("updatePratos", "Um registro foi inserido/atualizado");
});
Funcionario.watch().on("change", data => {
  io.emit("funcionario", "houve uma mudança em funcionários");
});

httpServer.listen(PORT, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${PORT}`);
});
