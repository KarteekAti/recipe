import { combineReducers } from "redux";
import posts from "./posts";
import cuisines from "./cuisines";
import auth from "./auth";

export default combineReducers({
  posts: posts,
  cuisines: cuisines,
  auth: auth,
});
