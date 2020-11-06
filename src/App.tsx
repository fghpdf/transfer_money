import React, { FC } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { Helmet } from "react-helmet";

import Choose from './scenes/choose';
import SenderRegister from './scenes/register/sender';
import BeneficiaryRegister from './scenes/register/beneficiary';
import Flow from './scenes/flow';
import CreateQuotation from './scenes/quotation';
import CreateTransaction from './scenes/transaction';

const App: FC = () => {
  
  return (
    <div>
      <Router>
        <Flow></Flow>
        <Switch>
          <Route path="/choose">
            <Helmet>
              <title>Choose Payer</title>
            </Helmet>
            <Choose></Choose>
          </Route>
          <Route path="/registerSender">
            <Helmet>
              <title>Register Sender</title>
            </Helmet>
            <SenderRegister></SenderRegister>
          </Route>
          <Route path="/registerBeneficiary">
            <Helmet>
              <title>Register Beneficiary</title>
            </Helmet>
            <BeneficiaryRegister></BeneficiaryRegister>
          </Route>
          <Route path="/createQuotation">
            <Helmet>
              <title>Create Quotation</title>
            </Helmet>
            <CreateQuotation></CreateQuotation>
          </Route>
          <Route path="/createTransaction">
            <Helmet>
              <title>Create Transaction</title>
            </Helmet>
            <CreateTransaction></CreateTransaction>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;