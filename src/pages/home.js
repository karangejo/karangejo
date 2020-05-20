import React from "react";
import { Grid } from "@material-ui/core";
import Layout from "../components/layout";
import Boat from "../images/boat-1297127.png";
import KnotsLeft from "../components/knotsLeft";
import KnotsRight from "../components/knotsRight";

function Home() {
  return (
    <Layout
      boatImage={Boat}
      imageWidth="45vw"
      borderRight={<KnotsRight />}
      borderLeft={<KnotsLeft />}
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
          <h1>Home</h1>
        </Grid>
        <Grid item>
          <h2 align="center">
            <span className="normal">
              Hello
              <br />I am a
            </span>
            <span className="blue"> web developer</span>
            <span className="normal"> / </span>
            <span className="blue"> data wrangler</span>
            <span className="normal"> / </span>
            <span className="blue"> game designer</span>
            <span className="normal"> / </span>
            <span className="blue"> music producer</span>
            <span className="normal"> / </span>
            <span className="blue"> linux sysadmin</span>
          </h2>
        </Grid>
        <Grid item>
          <h2 align="center">
            <span className="normal">
              I like the <span className="blue">ocean</span>.<br />
              Welcome!
            </span>
          </h2>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;

// white and blue
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
