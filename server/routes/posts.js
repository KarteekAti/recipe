import express from "express";
import { getPosts, createPost, getCuisines } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/cuisines", getCuisines);

export default router;
