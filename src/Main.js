import React from 'react';
import Home from './Home';
import About from './AboutMePage';
import Portfolio from './Portfolio';
import {Route, Switch} from 'react-router-dom';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Switch>
  )
}

export default Main;