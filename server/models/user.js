import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: String,
  name: String,
  image: String,
  joined: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
