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
import testController from "./controllers/testController";

import { createServer } from "http";
import { Server } from "socket.io";

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
app.use("/test", testController);

app.get("/", (req, res) => {
  io.emit("chat message", "Luqueta da galereta");
  res.send("Olá server");
});

io.on("connection", socket => {
  socket.on("chat message", msg => {
    console.log(msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${PORT}`);
});
