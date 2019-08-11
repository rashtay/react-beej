// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import asyncImport from './async-import';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={asyncImport('Comp1')} />
        <Route path="/about" component={asyncImport('Comp2')} />
        <Route path="/contact" component={asyncImport('Comp3')} />
        <Route component={asyncImport('NotFound')} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
