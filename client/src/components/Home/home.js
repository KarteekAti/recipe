import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <Grow in>
      <Container maxWidth="lg">
        <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
