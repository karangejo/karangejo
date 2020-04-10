import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Blog from './pages/blog';
import Code from './pages/code';
import Music from './pages/music';


function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} />
                <Route path="/code" component={Code} />
                <Route path="/music" component={Music} />
            </Switch>
        </BrowserRouter>
  );
}

export default App;
