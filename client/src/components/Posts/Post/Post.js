import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CssBaseline,
  Box,
} from "@material-ui/core";
import ThumbupAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./style";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Card className={classes.card}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
          />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>{" "}
            <Typography
              variant="body2"
              style={{ display: { xs: "none", sm: "block" } }}
            >
              {moment.utc(post.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: "white" }} size="small" onClick={() => {}}>
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          <CardContent style={{ padding: 0 }}>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.54)",
                color: "white",
                padding: "10px",
              }}
            >
              <Typography className={classes.title} variant="h6">
                {post.title}
              </Typography>
            </Box>
          </CardContent>
        </Box>
        <div className={classes.details} style={{ wordBreak: "break-word" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {post.description}
          </Typography>
        </div>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbupAltIcon fontSize="small" /> &nbsp; {post.likeCount}
          </Button>
          <Button size="small" color="danger" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
