import React from 'react';
import { Router } from '@reach/router';
import Amplify from 'aws-amplify';

import config from '../aws-exports';
import Layout from '../components/layouts/Layout';

import PrivateRoute from '../components/_app/PrivateRoute';
import Details from '../components/_app/Details';
import { Dashboard } from '../components/_app/_dashboard/Dashboard';
import { Login } from '../components/_app/_signin/Login';
import SignUp from '../components/_app/_signup/SignUp';

Amplify.configure(config);

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app" component={Dashboard} />
      <PrivateRoute path="/app/home" component={Dashboard} />
      <PrivateRoute path="/app/profile" component={Details} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
);

export default App;
