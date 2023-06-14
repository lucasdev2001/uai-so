import multer from "multer";
import fs from "node:fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const storagePath = "./images";

    fs.mkdirSync(storagePath, { recursive: true });
    cb(null, storagePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
