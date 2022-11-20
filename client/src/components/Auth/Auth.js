import React, { useState } from "react";
import {
  Avatar,
  Container,
  Paper,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import * as api from "../../api";

import Input from "./Input";

const Auth = () => {
  let state = null;
  const [isSignup, setSignUp] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setSignUp((prevSignUp) => !prevSignUp);
  };

  const fetchUser = async (token) => {
    state = await api.userFetch(token);
    state = state.data;
    try {
      dispatch({ type: "AUTH", data: { state } });
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => fetchUser(tokenResponse.access_token),
    onError: (error) => console.log(error),
  });

  return (
    <Container
      component="div"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      maxWidth="xs"
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
        spacing={8}
      >
        <Avatar sx={{ backgroundColor: "#DF2935", m: 1, marginTop: 3 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 3 }}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            fullWidth
            onClick={login}
            variant="contained"
            sx={{ color: "white", textTransform: "none", mb: 1, mt: 1 }}
          >
            Sign in with Google 🚀{" "}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            {isSignup ? "SignUp" : "SignIn"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} sx={{ textTransform: "none" }}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {console.log(state)}
    </Container>
  );
};

export default Auth;
