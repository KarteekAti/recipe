import express from "express";
import {
  getPosts,
  createPost,
  getCuisines,
  userFetch,
  search,
  likes,
  getRecipe,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/cuisines", getCuisines);
router.get("/auth", userFetch);
router.get("/search", search);
router.put("/likeIncrease", likes);
router.get("/getRecipe", getRecipe);
export default router;
