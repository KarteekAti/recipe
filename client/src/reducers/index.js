import { combineReducers } from "redux";
import posts from "./posts";
import cuisines from "./cuisines";

export default combineReducers({ posts: posts, cuisines: cuisines });
