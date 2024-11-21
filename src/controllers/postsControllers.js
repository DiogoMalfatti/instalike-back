import { getTodosOsPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosOsPosts();
  res.status(200).json(posts);
}
