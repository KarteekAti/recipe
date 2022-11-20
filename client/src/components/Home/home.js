import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts, getCuisines } from "../../actions/posts.js";
import Posts from "../Posts/Posts";
import Cuisines from "../Cuisines/Cuisines";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCuisines());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Cuisines />
      <Posts />
    </>
  );
};

export default Home;
