import { Router } from "express";
import Mensagem from "../models/Mensagem";
import Conversa from "../models/Conversa";
const router = Router();

router.post("/", async (req, res) => {
  const { destinatario, remetente, conteudo } = req.body;
  let conversa;

  try {
    conversa = await Conversa.findOne({
      funcionarios: { $all: [destinatario, remetente] },
    });

    if (conversa === null) {
      conversa = new Conversa({
        funcionarios: [remetente, destinatario],
      });
      await conversa.save();
    }

    const mensagem = new Mensagem({
      destinatario: destinatario,
      remetente: remetente,
      conteudo: conteudo,
      conversa: conversa._id,
    });

    await mensagem.save();
    res.status(201).send(mensagem);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
