import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const getCuisines = () => axios.get(url + "/cuisines");
export const userFetch = (token) =>
  axios.get(url + "/auth", { headers: { token: token } });
export const search = (query) =>
  axios.get(url + "/search", { headers: { search: query } });
export const getRecipe = (id) =>
  axios.get(url + "/getRecipe", {
    headers: {
      _id: id,
    },
  });
