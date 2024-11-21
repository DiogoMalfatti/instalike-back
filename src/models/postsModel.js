import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosOsPosts() {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
