import { Router } from "express";
import Prato from "../models/Prato";
import { upload } from "../middlewares/multerController";
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

router.post("/", upload.single("foto"), async (req, res) => {
  try {
    const { nome, foto, descricao, preco } = req.body;
    const fotoPath = req.file?.path ?? "emty answer";
    console.log(fotoPath);

    const prato = new Prato({
      nome,
      foto: fotoPath,
      descricao,
      preco,
    });

    await prato.save();

    res.status(201).json(prato);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
