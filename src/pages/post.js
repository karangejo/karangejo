import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import queryString from "query-string";
import Layout from "../components/layout";
import Boat from "../images/boat-2027004.png";
import FishRight from "../components/fishRight";
import FishLeft from "../components/fishLeft";
import OnePost from "../components/post";
import axios from "axios";

function Post(props) {
  const [post, setPost] = useState([]);
  const [display, setDisplay] = useState(false);

  const getPost = (id) => {
    axios
      .post(process.env.REACT_APP_GET_ONE_POST_BY_ID_URL, { id: id })
      .then((res) => {
        setPost(res.data[0]);
        setDisplay(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    getPost(query.postId);
  }, [props.location.search]);

  const displayOnePost = () => {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingRight: "10px", paddingLeft: "10px", width: "60vw" }}
      >
        <Grid item>
          <h1 align="center">{post.name}</h1>
        </Grid>
        <Grid item style={{ width: "60vw", overflow: "auto" }}>
          <OnePost source={post.markdown} />
        </Grid>
      </Grid>
    );
  };

  return (
    <Layout
      boatImage={Boat}
      imageWidth="35vw"
      borderLeft={<FishLeft alignItems="flex-end" />}
      borderRight={<FishRight alignItems="flex-start" />}
    >
      {display && displayOnePost()}
    </Layout>
  );
}

export default Post;
