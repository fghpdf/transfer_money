import React, { FC } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Choose from './scenes/choose';
import SenderRegister from './scenes/register/sender';
import BeneficiaryRegister from './scenes/register/beneficiary';
import Flow from './scenes/flow';
import CreateQuotation from './scenes/quotation';
import CreateTransaction from './scenes/transaction';
import ListTransactionStatus from './scenes/transaction/listConfirm';

const App: FC = () => {
  
  return (
    <div>
      <Router>
        <Flow></Flow>
        <Switch>
          <Route path="/confirm">
            <ListTransactionStatus></ListTransactionStatus>
          </Route>
          <Route path="/choose">
            <Choose></Choose>
          </Route>
          <Route path="/registerSender">
            <SenderRegister></SenderRegister>
          </Route>
          <Route path="/registerBeneficiary">
            <BeneficiaryRegister></BeneficiaryRegister>
          </Route>
          <Route path="/createQuotation">
            <CreateQuotation></CreateQuotation>
          </Route>
          <Route path="/createTransaction">
            <CreateTransaction></CreateTransaction>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;