import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Pages/Home';
import Project from '../components/Pages/Projects';
import NoMatch from '../components/NotFound';
import Streetrip from '../components/Projects/streetrip/';

export default () => 
  (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/index" exact component={Home} />
        <Route path="/projects" exact component={Project} />
        <Route path="/projects/streetrip" component={Streetrip} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
