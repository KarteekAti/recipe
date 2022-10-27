import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./style";
import moment from "moment";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {console.log(new Date(Date.now()))}
      {console.log(moment(Date.now()).fromNow())}
      <CircularProgress size="10%" />
      <h4>Loading...</h4>
    </div>
  ) : (
    <Grid className={classes.mainContainer} container spacing={3}>
      {posts.map((post) => (
        <Grid item key={post.id}>
          <CssBaseline />
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
