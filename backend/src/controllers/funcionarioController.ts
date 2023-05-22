import { Router } from "express";
import Funcionario from "../models/Funcionario";
const router = Router();

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const funcionario = new Funcionario({ nome, email, senha });
    await funcionario.save();
    res.status(201).send(funcionario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.status(200).send(funcionarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  console.log(email);
  console.log(senha);

  try {
    const funcionario = await Funcionario.findOne({
      email: email,
      senha: senha,
    }).select({ _id: true, nome: true, email: true });
    if (!funcionario) {
      res.status(400).send({ message: "e-mail ou senha incorretos" });
    } else {
      res.status(200).send(funcionario);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
