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

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI).catch((error) => console.log(error));

//middleweres
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "*",
    credentials: true,
  })
);

//rotas
app.use("/clientes", clienteController);
app.use("/reservas", reservaController);
app.use("/funcionarios", funcionarioController);
app.use("/mensagens", mensagemController);
app.use("/test", testController);

app.listen(port, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${port}`);
});
