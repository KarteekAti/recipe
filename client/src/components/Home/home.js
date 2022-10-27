import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import Cuisines from "../Cuisines/Cuisines";

const Home = () => {
  const list = [
    "Indian Cuisine",
    "Spanish Cuisine",
    "Russian Cuisine",
    "British Cuisine",
    "Japansese Cuisine",
    "Bengali Cuisine",
    "Maharashtrian",
    "North Indian",
    "Chinese Cuisine",
    "French Cuisine",
  ];
  return (
    <>
      <Cuisines />
      <Grow in>
        <Grid container>
          <Posts />
        </Grid>
      </Grow>
    </>
  );
};

export default Home;
