import { Router } from "express";
import Funcionario from "../models/Funcionario";
const router = Router();

router.post("/", async (req, res) => {
  const { nome } = req.body;
  try {
    const funcionario = new Funcionario({ nome });
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

export default router;
