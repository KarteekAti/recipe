import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { ImageList } from "@mui/material";
import { Image } from "mui-image";

const Cuisines = () => {
  const cuisines = useSelector((state) => state.cuisines);
  return cuisines.length ? (
    <Container sx={{ display: "flex", p: 2, m: 1 }}>
      {cuisines.map((item) => (
        <Box
          sx={{
            width: { xs: 75, sm: 100 },
            height: { xs: 75, sm: 100 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "50px",
            m: 1,
          }}
          style={{
            backgroundImage: `url(${item.selectedFile})`,
            backgroundSize: 100,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "darken",
          }}
          duration="10"
        >
          {/* <Image
            src={item.selectedFile}
            sx={{ borderRadius: "50px" }}
            alt={item.cuisine}
          /> */}
          <Typography variant="h6" sx={{ color: "white" }}>
            {item.cuisine}
          </Typography>
        </Box>
      ))}
    </Container>
  ) : null;
};

export default Cuisines;
