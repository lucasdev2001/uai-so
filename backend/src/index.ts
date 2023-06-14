import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//controllers
import clienteController from "./controllers/clienteController";
import funcionarioController from "./controllers/funcionarioController";
import mensagemController from "./controllers/mensagemController";
import pratoController from "./controllers/pratoController";
import { createServer } from "http";
import { Server } from "socket.io";
import Prato from "./models/Prato";
import filesController from "./controllers/filesController";

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
app.use("/mensagens", mensagemController);
app.use("/pratos", pratoController);
app.use("/files", filesController);

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
  io.emit("updatePratos", "Um registro foi inserido/atualizado");
  console.log(data);
});

httpServer.listen(PORT, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${PORT}`);
});
