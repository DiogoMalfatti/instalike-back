import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
  atualizaNovoPost,
} from "../controllers/postsControllers.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);

  app.post("/posts", postarNovoPost);

  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizaNovoPost);
};

export default routes;
