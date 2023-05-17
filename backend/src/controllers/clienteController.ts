import { Router } from "express";
import Cliente from "../models/Cliente";

const router = Router();

router.get("/", async (req, res) => {
  Cliente.find()
    .populate("reservas", {
      cliente: false,
    })
    .then(clientes => res.status(200).send(clientes))
    .catch(err => res.status(500).send(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Cliente.findById(id)
    .then(cliente => res.status(200).send(cliente))
    .catch(err => res.status(500).send(err));
});

router.post("/", (req, res) => {
  const { nome, email, senha } = req.body;
  new Cliente({ nome, email, senha })
    .save()
    .then(cliente => res.status(201).send(cliente));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  Cliente.findByIdAndUpdate(id, req.body)
    .then(cliente => res.status(201).send(cliente))
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  Cliente.findByIdAndDelete(id)
    .then(cliente => res.status(200).send(cliente))
    .catch(err => res.status(500).send(err));
});

export default router;
