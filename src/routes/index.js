// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AsyncImport } from 'components/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AsyncImport('Comp1')} />
        <Route path="/about" component={AsyncImport('Comp2')} />
        <Route path="/contact" component={AsyncImport('Comp3')} />
        <Route component={AsyncImport('NotFound')} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
