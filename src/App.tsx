import React, { FC } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Choose from './scenes/choose';
import SenderRegister from './scenes/register/sender';
import BeneficiaryRegister from './scenes/register/beneficiary';
import Flow from './scenes/flow';

const App: FC = () => {
  
  return (
    <div>
      <Router>
        <Flow></Flow>
        <Route path="/">
        </Route>
        <Switch>
          <Route path="/choose">
            <Choose></Choose>
          </Route>
          <Route path="/registerSender">
            <SenderRegister></SenderRegister>
          </Route>
          <Route path="/registerBeneficiary">
            <BeneficiaryRegister></BeneficiaryRegister>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;