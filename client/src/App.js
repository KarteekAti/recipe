import React, { useEffect } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPosts, getCuisines } from "./actions/posts.js";
import Appbar from "./components/AppBar/Appbar";
import Home from "./components/Home/home";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCuisines());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#FFE8D8", height: "100%" }}>
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
    </div>
  );
};

export default App;
