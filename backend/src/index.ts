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

//env variables
const { PORT, MONGO_URI } = process.env;

const app = express();

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
  res.send("Olá server");
});

app.listen(PORT, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${PORT}`);
});
