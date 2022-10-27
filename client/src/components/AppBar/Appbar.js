import React from "react";
import { AppBar, Typography, CssBaseline, Toolbar, Box } from "@mui/material";
import hotkitchen from "../../images/hot_kitchen.png";
import { IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import SearchBar from "material-ui-search-bar";

const Appbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{ display: "flex", backgroundColor: "#FFDDC4", boxShadow: "none" }}
      >
        <CssBaseline />
        <Toolbar>
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
          <Box sx={{ flexGrow: 0.8 }} />
          <SearchBar
            cancelOnEscape
            Escape
            style={{
              borderRadius: "40px",
              height: "30px",
              width: "450px",
              boxShadow: "none",
            }}
            placeholder="Search a Recipe"
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="account of current user"
            style={{ color: "black" }}
          >
            <LoginIcon />
            <Typography
              variant="body1"
              style={{ color: "black" }}
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
            >
              Login
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
