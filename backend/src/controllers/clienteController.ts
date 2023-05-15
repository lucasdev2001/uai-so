import { Router } from "express";
import Cliente from "../models/Cliente";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.find({});

    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findById(id).populate("reservas");
    res.status(200).send(cliente);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const query = await new Cliente({ nome, email, senha }).save();
    res.status(201).send(query);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await Cliente.findByIdAndUpdate(id, req.body);
    res.status(201).send(query);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

export default router;
