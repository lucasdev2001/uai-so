import { Router } from "express";
import Funcionario from "../models/Funcionario";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  const { nome, email, senha, grupo } = req.body;
  const emailExistente = await Funcionario.findOne({ email });

  if (emailExistente) {
    return res.status(400).json({ error: "Esse E-Mail já existe." });
  }
  try {
    const funcionario = new Funcionario({ nome, email, senha, grupo });
    await funcionario.save();
    res.status(201).send(funcionario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json(funcionario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
    res.status(201).json(funcionario);
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
  console.log(email, senha);

  try {
    const funcionario = await Funcionario.findOne({ email: email });
    console.log(funcionario);

    const auth = await bcrypt.compare(senha, funcionario.senha);
    if (auth) {
      res.send({
        _id: funcionario._id,
        nome: funcionario.nome,
        email: funcionario.email,
        grupo: funcionario.grupo,
      });
    } else {
      res.status(400).send("senha invalida");
    }
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

export default router;
