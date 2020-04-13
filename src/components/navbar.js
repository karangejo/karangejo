import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  CrabButton,
  LobsterButton,
  AnchorButton,
  ShellButton,
} from "marine-ui-react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
 
  const [lobsterFill, setLFill] = useState("#000");
  const [crabFill, setCFill] = useState("#000");
  const [shellFill, setSFill] = useState("#000");
  const [anchorFill, setAFill] = useState("#000");

  
  const hoveredCol = "#ba5016";
  const bkgCol = "transparent";
  const btnSize = 1.1;
  const font = "Fredericka the Great";
  const fontS = "13px";


  const enteredAButton = () => {
    setAFill(hoveredCol);
  };
  const leftAButton = () => {
    setAFill("#000");
  };
  const enteredLButton = () => {
    setLFill(hoveredCol);
  };
  const leftLButton = () => {
    setLFill("#000");
  };
  const enteredCButton = () => {
    setCFill(hoveredCol);
  };
  const leftCButton = () => {
    setCFill("#000");
  };
  const enteredSButton = () => {
    setSFill(hoveredCol);
  };
  const leftSButton = () => {
    setSFill("#000");
  };

  const history = useHistory();

  const anchorClick = () => {
    history.push("/");
  };
  const lobsterClick = () => {
    history.push("/code");
  };
  const crabClick = () => {
    history.push("/blog");
  };
  const shellClick = () => {
    history.push("/music");
  };

  return (
    <Grid style={{ padding: "5px 0px 0px 0px" }}>
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="flex-end"
        justify="center"
      >
        <Grid item>
          <AnchorButton
            onClick={anchorClick}
            fontSize={fontS}
            fontFamily={font}
            onMouseLeave={leftAButton}
            onMouseEnter={enteredAButton}
            size={btnSize}
            fill={anchorFill}
            fontColor={anchorFill}
            text="Home"
            backgroundColor={bkgCol}
          />
        </Grid>
        <Grid item>
          <LobsterButton
            onClick={lobsterClick}
            fontSize={fontS}
            fontFamily={font}
            onMouseLeave={leftLButton}
            onMouseEnter={enteredLButton}
            size={btnSize}
            fill={lobsterFill}
            fontColor={lobsterFill}
            text="Code"
            backgroundColor={bkgCol}
          />
        </Grid>
        <Grid item>
          <CrabButton
            onClick={crabClick}
            fontSize={fontS}
            fontFamily={font}
            onMouseLeave={leftCButton}
            onMouseEnter={enteredCButton}
            size={btnSize}
            fill={crabFill}
            fontColor={crabFill}
            text="Blog"
            backgroundColor={bkgCol}
          />
        </Grid>
        <Grid item>
          <ShellButton
            onClick={shellClick}
            fontSize={fontS}
            fontFamily={font}
            onMouseLeave={leftSButton}
            onMouseEnter={enteredSButton}
            size={btnSize}
            fill={shellFill}
            fontColor={shellFill}
            text="Music"
            backgroundColor={bkgCol}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Navbar;

//colors
// #FEFBEA cosmic latte
// #93B48B dark sea green
// #98C1D9 pale blue cerulean
// #BFACAA silver pink
// #130303 smoky black
