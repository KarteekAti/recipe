import React, { useEffect } from "react";
import { Container, CssBaseline } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPosts } from "./actions/posts.js";
import Form from "./components/Form/Form";
import Home from "./components/Home/home";
import Appbar from "./components/AppBar/Appbar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Appbar />
      <Container maxWidth="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
