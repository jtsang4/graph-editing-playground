import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { Benchmark } from './benchmark';
import { App } from './app';

const history = createHashHistory();

export const IRouter: React.FC<{}> = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/benchmark">
          <Benchmark />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};
