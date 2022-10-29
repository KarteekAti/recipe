import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, Button } from "@mui/material";
import { ImageList } from "@mui/material";
import { Image } from "mui-image";

const Cuisines = () => {
  const cuisines = useSelector((state) => state.cuisines);
  return cuisines.length ? (
    <Grid
      container
      sx={{
        m: 1,
        p: 2,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {cuisines.map((item) => (
        <Grid item key={item._id}>
          <Box
            sx={{
              width: { xs: 100, sm: 100 },
              height: { xs: 100, sm: 100 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "50px",
              m: 1,
            }}
            style={{
              backgroundImage: `url(${item.selectedFile})`,
              backgroundSize: 150,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backgroundBlendMode: "darken",
            }}
            duration="10"
          >
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "50px",
                width: { xs: 75, sm: 100 },
                height: { xs: 75, sm: 100 },
              }}
              onClick={() => console.log(item._id)}
            >
              <Typography
                variant="p"
                sx={{ color: "white", fontWeight: { xs: 600, sm: 700 } }}
              >
                {item.cuisine}
              </Typography>
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default Cuisines;
