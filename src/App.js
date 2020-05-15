import React from "react";
import { Switch, Route } from "react-router-dom";
//import { useTransition, animated, config } from "react-spring";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Code from "./pages/code";
import Music from "./pages/music";
import Admin from "./pages/admin";
import Post from "./pages/post";

import "./styles.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/code" component={Code} exact />
        <Route path="/music" component={Music} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/post" component={Post} exact />
      </Switch>
    </>
  );
}

export default App;
