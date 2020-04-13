import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import {useTransition, animated} from 'react-spring';
import Home from './pages/home';
import Blog from './pages/blog';
import Code from './pages/code';
import Music from './pages/music';


function App() {
  let location = useLocation();
  const transition = useTransition(location, location => location.pathname, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave : {opacity: 0}
  })

  return (
    <div>
      {transition.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} exact/>
                <Route path="/code" component={Code} exact/>
                <Route path="/music" component={Music} exact/>
            </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
