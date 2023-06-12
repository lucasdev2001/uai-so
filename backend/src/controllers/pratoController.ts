import { Router } from "express";
import Prato from "../models/Prato";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const pratos = await Prato.find();
    res.json(pratos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nome, foto, descricao, preco } = req.body;

    const newPrato = new Prato({
      nome,
      foto,
      descricao,
      preco,
    });

    await newPrato.save();

    res.status(201).json(newPrato);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
