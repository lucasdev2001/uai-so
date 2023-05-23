import { Router } from "express";
import Cliente from "../models/Cliente";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.find().populate("reservas");
    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findById(id);
    res.status(200).send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const cliente = new Cliente({ nome, email, senha });
    await cliente.save();
    res.status(201).send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByIdAndUpdate(id, req.body);
    res.status(201).send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  Cliente.findByIdAndDelete(id)
    .then(cliente => res.status(200).send(cliente))
    .catch(err => res.status(500).send(err));
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  console.log(email);

  try {
    const cliente = await Cliente.findOne({ email: email });
    const auth = await bcrypt.compare(senha, cliente.senha);
    if (auth) {
      res.send({
        _id: cliente._id,
        nome: cliente.nome,
        email: cliente.email,
      });
    } else {
      res.status(400).send("senha invalida");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
