import { Router } from "express";
import Conversa from "../models/Conversa";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const conversas = Conversa.find();
    res.status(200).send(conversas);
  } catch (error) {
    res.status(200).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const conversa = Conversa.findById(id);
    res.status(200).send(conversa);
  } catch (error) {
    res.status(200).send(error);
  }
});

export default router;
