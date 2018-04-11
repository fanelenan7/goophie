import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Result from './Result';
import NotFound from './NotFound';

import './Pages.css';

const Pages = () => (
  <div className="pages">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Pages;
