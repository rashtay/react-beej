// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Comp1, Comp2, Comp3, NotFound } from 'components/';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Comp1} />
      <Route path="/about" component={Comp2} />
      <Route path="/contact" component={Comp3} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
