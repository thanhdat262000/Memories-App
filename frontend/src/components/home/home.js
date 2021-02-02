import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../posts/posts";
import Form from "../form/form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/post";
function Home(props) {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    return () => {};
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>{" "}
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;