import express from "express";
import Pedido from "../models/Pedido";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the pedido" });
  }
});

router.get("/", async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve pedidos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido not found" });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the pedido" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pedido) {
      return res.status(404).json({ error: "Pedido not found" });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the pedido" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido not found" });
    }
    res.json({ message: "Pedido deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the pedido" });
  }
});

export default router;
