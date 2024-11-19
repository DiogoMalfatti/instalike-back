import express from "express";

const posts = [
  {
    id: 1,
    descricao: "uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fofo dormindo",
    imagem: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    descricao: "Paisagem montanhosa",
    imagem: "https://source.unsplash.com/random/400x300/?mountains",
  },
  {
    id: 4,
    descricao: "Cachorro brincando no parque",
    imagem: "https://source.unsplash.com/random/400x300/?dog,park",
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://source.unsplash.com/random/400x300/?food",
  },
  {
    id: 6,
    descricao: "Cidade à noite",
    imagem: "https://source.unsplash.com/random/400x300/?city,night",
  },
  {
    id: 7,
    descricao: "Oceano com ondas",
    imagem: "https://source.unsplash.com/random/400x300/?ocean,waves",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscaPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscaPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
