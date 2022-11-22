import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { searchFood } from "../../actions/posts";
import GoogleIcon from "@mui/icons-material/Google";
import hotkitchen from "../../images/hot_kitchen.png";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";

const Appbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ display: "flex", backgroundColor: "#FFDDC4", boxShadow: "none" }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", display: "contents" }}>
            <img
              sx={{ color: "black" }}
              src={hotkitchen}
              alt="Hot_Kitchen"
              height="60"
            />
            <Typography
              variant="h5"
              style={{ color: "black" }}
              sx={{ display: { xs: "none", sm: "block" }, fontFamily: "Teko" }}
            >
              Hot Kitchen
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0.8 }} />
          <SearchBar
            onRequestSearch={(e) => dispatch(searchFood(e))}
            cancelOnEscape
            style={{
              borderRadius: "40px",
              height: "30px",
              width: "450px",
              boxShadow: "none",
            }}
            placeholder="Search a Recipe"
          />
          <Box sx={{ flexGrow: 1 }} />
          {user ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar className="" src={user.state.picture}></Avatar>
              <Button
                variant="contained"
                onClick={logout}
                sx={{ width: "20px" }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <IconButton
              component={Link}
              to="/auth"
              aria-label="account of current user"
              style={{ color: "black" }}
            >
              <GoogleIcon />
              <Typography
                variant="body2"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontWeight: "bold",
                }}
              >
                Login
              </Typography>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
