import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.cookie("name", "userName");
  res.send("seeting cookiage");
});

export default router;
