import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./post/post.js";
import useStyles from "./styles.js";
function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.mainContainer} container ali="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId}></Post>{" "}
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
