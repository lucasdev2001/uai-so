import { Router } from "express";
import Reserva from "../models/Reserva";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const reservas = await Reserva.find({});
    res.status(200).send(reservas);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findById(id).getPopulatedPaths();
    res.status(200).send(reserva);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { data, tipo, cliente, mesa } = req.body;
    const novaReserva = await new Reserva({ data, tipo, cliente, mesa });
    await novaReserva.save();
    res.status(201).send(novaReserva);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

export default router;
