import { Router } from "express";
import Reserva from "../models/Reserva";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).send(reservas);
  } catch (error) {
    console.log(error);

    res.status(404).send({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findById(id);
    res.status(200).send(reserva);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.get("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservas = await Reserva.find({ cliente: id });
    res.status(200).send(reservas);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { data, horario, tipo, cliente, qtdPessoas } = req.body;
  console.log(data);

  try {
    const reserva = new Reserva({ data, horario, tipo, cliente, qtdPessoas });
    await reserva.save();
    res.status(201).send(reserva);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default router;
