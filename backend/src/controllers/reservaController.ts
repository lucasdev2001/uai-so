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

router.post("/", (req, res) => {
  const { data, tipo, cliente, mesa } = req.body;
  new Reserva({ data, tipo, cliente, mesa })
    .save()
    .then(reserva => res.status(201).send(reserva))
    .catch(err => res.status(500).send(err));
});

export default router;
