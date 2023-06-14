import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e2);
    cb(null, uniqueSuffix + file.originalname);
  },
});

export const upload = multer({ storage: storage });
