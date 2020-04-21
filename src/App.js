import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import {useTransition, animated, config} from 'react-spring';
import Home from './pages/home';
import Blog from './pages/blog';
import Code from './pages/code';
import Music from './pages/music';
import Admin from './pages/admin';
import Post from './pages/post';

import './styles.css';

function App() {
  let location = useLocation();

  const transition = useTransition(location, location => location.pathname, {
    config: config.slow,
    from: {position:"absolute" , width: "100vw" , opacity: 0 , transform: "skew(5deg,5deg)"},
    enter: {position:"inherit" , opacity: 1, transform: "skew(0deg,0deg)"},
    leave : {position:"absolute" , width: "100vw", opacity: 0, transform: "skew(-5deg,-5deg)"}
  })

  return (
    <>
      {transition.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} exact/>
                <Route path="/code" component={Code} exact/>
                <Route path="/music" component={Music} exact/>
                <Route path='/admin' component={Admin} exact/>
                <Route path="/post" component={Post} exact/>
            </Switch>
        </animated.div>
      ))}
    </>
  );
}

export default App;
