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
    const { nome, descricao, preco } = req.body;

    const prato = new Prato({
      nome,
      foto: req.file ? req.file.originalname : "empty",
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

router.put("/:id", upload.single("foto"), async (req, res) => {
  try {
    const id = req.params.id;
    const updatePrato = Object.assign({}, req.body);
    console.log(updatePrato);

    if (req.file) {
      updatePrato.foto = req.file.originalname;
    }

    const prato = await Prato.findById(id).lean();

    const updatedDocument = {
      ...prato,
      ...updatePrato,
    };

    console.log(updatedDocument);

    const novoPrato = await Prato.findByIdAndUpdate(id, updatedDocument, {
      new: true,
    });

    res.status(201).json(novoPrato);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Step 1: Find the document by ID
    const prato = await Prato.findByIdAndDelete(req.params.id);

    if (!prato) {
      return res.status(404).json({ message: "Prato não encontrado" });
    }

    res.status(200).json({ message: "Prato deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
export default router;
