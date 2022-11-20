import mongoose from "mongoose";
import moment from "moment";

const postSchema = mongoose.Schema({
  postId: String,
  title: String,
  description: String,
  creator: String,
  cuisine: String,
  ingredients: [String],
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
postSchema.index({ name: "text", "profile.something": "text" });

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
