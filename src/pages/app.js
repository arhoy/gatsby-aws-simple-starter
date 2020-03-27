import React from 'react';
import { Router } from '@reach/router';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import config from '../aws-exports';
import Layout from '../components/layouts/Layout';
import { AppNav } from '../components/_app/AppNav/AppNav';
import PrivateRoute from '../components/PrivateRoute';

import Details from '../components/Details';
import Login from '../components/_app/_signin/Login';
import { SignUp } from '../components/_app/_signup/SignUp';
import { Dashboard } from '../components/_app/_dashboard/Dashboard';

Amplify.configure(config);

const App = props => (
  <Layout>
    <AppNav />
    <Router>
      <PrivateRoute exact path="/app/profile" component={Details} />
      <PrivateRoute exact path="/app" component={Dashboard} />
      <Login exact path="/app/login" />
      <SignUp exact path="/app/signup" />
    </Router>
  </Layout>
);

export default withAuthenticator(App);
