import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Appbar from "./components/AppBar/Appbar";
import Home from "./components/Home/home";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";

const App = () => {
  var rootStyle = {
    backgroundColor: "#FFE8D8",
    height: "100vh",
  };

  return (
    <div style={rootStyle}>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      >
        <BrowserRouter>
          <Appbar />
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create" element={<Form />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </Container>
          {/* <Footer /> */}
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
