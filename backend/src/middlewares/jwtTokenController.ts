import { Router } from "express";
import * as jwt from "jsonwebtoken";

const router = Router();

router.use((req, res, next) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    next();
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
