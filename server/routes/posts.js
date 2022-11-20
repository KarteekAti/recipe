import express from "express";
import {
  getPosts,
  createPost,
  getCuisines,
  userFetch,
  search,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/cuisines", getCuisines);
router.get("/auth", userFetch);
router.get("/search", search);
export default router;
