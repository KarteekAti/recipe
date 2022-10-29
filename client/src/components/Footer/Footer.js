import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        position: "sticky",
        height: "40px",
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFDDC4",
      }}
      component="footer"
      square
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div></div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
