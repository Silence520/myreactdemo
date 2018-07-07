import React from 'react';
import { HashRouter as Router, Route, Link, Switch, history } from 'react-router-dom';
import Home from '../views/home/index.js';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


export default  () => (
  <Router history={history}>
    <div>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);