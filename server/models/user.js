import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
  image: String,
  joined: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
