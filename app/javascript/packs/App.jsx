import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';

const App = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Home />} />
      <Route path={'/404'} render={() => <NotFound />} />
      <Redirect to={'/404'} />
    </Switch>
  );
};

export default App;
