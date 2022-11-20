import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./style";
import moment from "moment";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const date = new Date(moment.utc());
  console.log(date);
  return !posts.length ? (
    <div
      style={{
        height: "93.5vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
      }}
    >
      <CircularProgress size="10vh" />
      <h3>Loading...</h3>
    </div>
  ) : (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={6} sm={4} md={2}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
