// @flow
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AsyncImport = (path: string) => lazy(() => import(`containers/${path}`));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={AsyncImport('Todo')} />
          <Route path="/about" component={AsyncImport('About')} />
          <Route component={AsyncImport('NotFound')} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
