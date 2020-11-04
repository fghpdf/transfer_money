import React, { FC } from 'react';
import './App.css';

import { Router, Route, Switch } from 'react-router';

import { createBrowserHistory } from 'history';
import Choose from './scenes/choose';

const customHistory = createBrowserHistory();


const App: FC = () => {
  
  return (
    <Router history={customHistory}>
      <Route path="/">
      </Route>
      <Switch>
        <Route path="/choose">
          <Choose></Choose>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;