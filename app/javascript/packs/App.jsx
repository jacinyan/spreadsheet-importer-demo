import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Home />} />
      <Route exact path={'/not-found'} render={() => <NotFound />} />
      <Redirect to={'/not-found'} />
    </Switch>
  );
};

export default App;
