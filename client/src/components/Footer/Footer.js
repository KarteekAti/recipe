import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        // marginTop: "calc(5% + 20px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#FFDDC4",
      }}
      component="footer"
    >
      <Container maxWidth="lg" sx={{ color: "FFDDC4" }}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
            color: "#FFDDC4",
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            color: "#FFDDC4",
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
