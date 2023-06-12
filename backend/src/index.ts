import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//controllers
import clienteController from "./controllers/clienteController";
import reservaController from "./controllers/reservaController";
import funcionarioController from "./controllers/funcionarioController";
import mensagemController from "./controllers/mensagemController";
import pratoController from "./controllers/pratoController";
import { createServer } from "http";
import { Server } from "socket.io";
import Prato from "./models/Prato";

//env variables
const { PORT, MONGO_URI } = process.env;

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

mongoose.connect(MONGO_URI).catch(error => console.log(error));

//middleweres
app.use(express.json());
app.use(cors());

//rotas
app.use("/clientes", clienteController);
app.use("/reservas", reservaController);
app.use("/funcionarios", funcionarioController);
app.use("/mensagens", mensagemController);
app.use("/pratos", pratoController);

app.get("/", (req, res) => {
  io.emit("updatePratos", "Luqueta da galereta");
  res.send("Olá server");
});

io.on("connection", socket => {
  socket.on("chat message", msg => {
    console.log(msg);
  });
});

//watch streams

Prato.watch().on("change", data => {
  io.emit("updatePratos", "Luqueta da galereta");
  console.log(data);
});

httpServer.listen(PORT, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${PORT}`);
});
