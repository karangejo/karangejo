import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import Layout from "../components/layout";
import Boat from "../images/boat-2027004.png";
import FishRight from "../components/fishRight";
import FishLeft from "../components/fishLeft";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

function shuffle(arr) {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function Blog(props) {
  const [posts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const getPosts = () => {
    axios
      .get(process.env.REACT_APP_GET_ALL_POSTS_URL)
      .then((res) => {
        setAllPosts(res.data);
        setIsLoading(false);
        //    console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const goToPost = (id) => {
    history.push("post?postId=" + id);
  };

  const displayAllPosts = () => {
    const shuffledPosts = shuffle(posts);
    const items = shuffledPosts.map((item, key) => {
      const itemId = item._id;
      return (
        <Paper
          key={key}
          style={{
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => goToPost(itemId)}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            <Grid item>
              <h2>{item.name}</h2>
            </Grid>
          </Grid>
        </Paper>
      );
    });
    return items;
  };

  const displayLoading = () => {
    console.log("loading");
    return <LinearProgress variant="query" />;
  };

  return (
    <Layout
      boatImage={Boat}
      imageWidth="35vw"
      borderLeft={<FishLeft alignItems="flex-end" />}
      borderRight={<FishRight alignItems="flex-start" />}
    >
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        alignItems="center"
        style={{ paddingRight: "10px", paddingLeft: "10px", width: "60vw" }}
      >
        <Grid item>
          <h1 align="center">Blog</h1>
        </Grid>
        <Grid item style={isLoading ? { width: "100%" } : null}>
          {isLoading ? displayLoading() : displayAllPosts()}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Blog;
