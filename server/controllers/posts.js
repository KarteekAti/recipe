import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import PostMessage from "../models/postMessage.js";
import PostCuisine from "../models/cuisines.js";
import User from "../models/user.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(body);
  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getCuisines = async (req, res) => {
  try {
    const postCuisine = await PostCuisine.find();

    res.status(200).json(postCuisine);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const userFetch = async (req, res) => {
  try {
    const token = req.headers["token"];
    const data = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    try {
      const filter = { email: data["data"]["email"] };
      const update = {
        id: data["data"]["sub"],
        name: data["data"]["name"],
        image: data["data"]["picture"],
      };
      await User.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true,
      });
    } catch (error) {
      console.log(error);
    }
    res.status(200).json(data["data"]);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const search = async (req, res) => {
  try {
    const query = req.headers["search"];
    const postMessage = await PostMessage.aggregate([
      {
        $search: {
          index: "search",
          text: {
            query: query,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);
    console.log(postMessage);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
