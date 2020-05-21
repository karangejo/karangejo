import React, { useState, useEffect } from "react";
import { Grid, Select, MenuItem, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Boat from "../images/boat-1297127.png";
import KnotsLeft from "../components/knotsLeft";
import KnotsRight from "../components/knotsRight";
import axios from "axios";
import sha256 from "crypto-js/sha256";

function Admin() {
  console.log();
  const [markdownText, setMarkdownText] = useState("");
  const [postName, setPostName] = useState("");
  const [postType, setPostType] = useState("");
  const [preview, setPreview] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [pass, setPass] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const getPosts = async () => {
    const posts = await axios.get(process.env.REACT_APP_GET_ALL_POSTS_URL);
    //console.log(posts);
    setAllPosts(posts.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const textChange = (event) => {
    setMarkdownText(event.currentTarget.value);
  };

  const displayPreview = () => {
    return <ReactMarkdown source={markdownText} />;
  };

  const changePreview = () => {
    setPreview(!preview);
  };

  const handleChangePost = (event) => {
    setPostType(event.target.value);
  };

  const handleNameChange = (event) => {
    setPostName(event.currentTarget.value);
  };

  const validateInputs = () => {
    if (postName === "" || postType === "" || markdownText === "") {
      return false;
    } else {
      return true;
    }
  };

  const submitPost = () => {
    if (validateInputs()) {
      const post = {
        name: postName,
        type: postType,
        date: new Date(),
        markdown: markdownText,
      };

      axios
        .post(process.env.REACT_APP_SUBMIT_ONE_POST_URL, post)
        .then((res) => {
          console.log(res);
          getPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("invalid inputs");
    }
  };

  const deletePost = (id) => {
    console.log(process.env.REACT_APP_DELETE_POST_BY_ID);
    axios
      .post(process.env.REACT_APP_DELETE_POST_BY_ID, { id: id })
      .then((res) => {
        console.log(res);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayAllPosts = () => {
    const items = allPosts.map((item, key) => {
      return (
        <Paper key={key} style={{ width: "25vw", background: "transparent" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            <Grid item>
              <h2>{item.name}</h2>
            </Grid>
            <Grid item>
              <p>{item.type}</p>
            </Grid>
            <Grid item>
              <p>{item.date}</p>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => deletePost(item._id)}
              >
                Delete Post
              </Button>
            </Grid>
          </Grid>
        </Paper>
      );
    });
    return items;
  };

  const loggedInView = () => {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        alignItems="center"
        style={{ paddingRight: "10px", paddingLeft: "10px", width: "60vw" }}
      >
        <Grid item>
          <h1 align="center">Admin Panel</h1>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Post Name"
            type="text"
            variant="outlined"
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={postType}
            onChange={handleChangePost}
            label="Type"
            style={{ width: "25vw" }}
          >
            <MenuItem value={"blog"}>Blog</MenuItem>
            <MenuItem value={"code"}>Code</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "60vw", heigth: "auto" }}
            id="outlined-multiline-static"
            label="Markdown Post Editor"
            multiline
            rows={30}
            defaultValue=""
            variant="outlined"
            onChange={textChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={changePreview}>
            Preview
          </Button>
          <Button variant="contained" color="primary" onClick={submitPost}>
            Post
          </Button>
        </Grid>
        <Grid item style={{ width: "60vw", overflow: "auto" }}>
          {preview && displayPreview()}
        </Grid>
        <Grid item>{displayAllPosts()}</Grid>
      </Grid>
    );
  };

  const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_CHECK_LOGIN_URL, { pass: pass })
      .then((res) => {
        //console.log(res);
        if (res.data.status === 1) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePassChange = (event) => {
    const hash = sha256(event.currentTarget.value);
    setPass(hash.words);
  };

  const loginView = () => {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        alignItems="center"
        style={{ paddingRight: "10px", paddingLeft: "10px", width: "60vw" }}
      >
        <Grid item>
          <h1 align="center">Admin Panel</h1>
        </Grid>
        <Grid item>
          <form
            onSubmit={tryLogin}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="standard-password-input"
              label="password"
              type="password"
              variant="outlined"
              onChange={handlePassChange}
            />

            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  };

  const checkLogin = () => {
    if (loggedIn) {
      return loggedInView();
    } else {
      return loginView();
    }
  };

  return (
    <Layout
      boatImage={Boat}
      imageWidth="45vw"
      borderRight={<KnotsRight />}
      borderLeft={<KnotsLeft />}
    >
      {checkLogin()}
    </Layout>
  );
}

export default Admin;

// white and blue
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
