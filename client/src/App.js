import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import hotkitchen from "./images/hot_kitchen.png";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img
          className={classes.images}
          src={hotkitchen}
          alt="Hot Kitchen"
          height="120"
        />
        <Typography className={classes.heading} variant="h3" align="center">
          Hot Kitchen
        </Typography>
      </AppBar>
      <Grid item xs={12} sm={7}>
        <Form />
      </Grid>
    </Container>
  );
};

export default App;
