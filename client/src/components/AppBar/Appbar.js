import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import hotkitchen from "../../images/hot_kitchen.png";
import useStyles from "./styles";

const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <div style={{ display: "flex" }}>
        <img
          className={classes.images}
          src={hotkitchen}
          alt="Hot Kitchen"
          height="120"
        />
        <Typography className={classes.heading} variant="h3" align="center">
          Hot Kitchen
        </Typography>
      </div>
    </AppBar>
  );
};

export default Appbar;
