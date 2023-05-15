import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
//controllers
import clienteController from "./controllers/clienteController";
import reservaController from "./controllers/reservaController";

const app = express();
const port = process.env.PORT;

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
})();

//middleweres
app.use(express.json());
app.use(cors());

//rotas
app.use("/clientes", clienteController);
app.use("/reservas", reservaController);

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a schema for the 'Post' model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // refers to the 'User' model
  },
});

const User = mongoose.model("User", userSchema);

// Create the 'Post' model
const Post = mongoose.model("Post", postSchema);

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const { name, age } = req.body;
    const user = new User({ name, age });

    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Create a new post
app.post("/posts", async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    const user = await User.findById(authorId);
    if (!user) {
      throw new Error("User not found");
    }

    const post = new Post({ title, content, author: user });

    await post.save();
    res.send("Post created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all posts with the corresponding author information
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate;
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`izza alive 🧟‍♂️ ⚡ ${port}`);
});
