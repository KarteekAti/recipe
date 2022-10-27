import mongoose from "mongoose";

const cuisineSchema = mongoose.Schema({
  cuisine: String,
  selectedFile: String,
});

const PostCuisine = mongoose.model("Cuisine", cuisineSchema);

export default PostCuisine;
