// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import asyncImport from './async-import';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={asyncImport('Todo')} />
        <Route path="/about" component={asyncImport('About')} />
        <Route path="/contact" component={asyncImport('Contact')} />
        <Route component={asyncImport('NotFound')} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
