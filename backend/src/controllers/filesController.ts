import { Router } from "express";
const router = Router();

router.get("/images/:name", async (req, res) => {
  const imageName = req.params.name;
  try {
    res.sendFile("D:/images/" + imageName);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

export default router;
