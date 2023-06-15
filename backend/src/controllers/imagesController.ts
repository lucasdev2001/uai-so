import { Router } from "express";
import path from "node:path";
const router = Router();

router.get("/:name", async (req, res) => {
  const imageName = req.params.name;
  const imagesFolder = path.join(__dirname, "../../images");
  try {
    res.sendFile(`${imagesFolder}/${imageName}`);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

export default router;
