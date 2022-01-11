import React, { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import Router from './routes';
import Signup from './screens/Signup';
import Login from './screens/Login';
import SendMessage from './screens/SendMessage';
import Home from 'screens/Home';
import Alert from 'components/Alert';
import SetEmail from 'screens/SetEmail';
import history from 'helpers/history';
// import EmailVerificationRoute from 'components/customroutes/EmailVerificationRoute';

export default function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Alert />

      <Router />

      {/* <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <EmailVerificationRoute path="/set-email" component={SetEmail} exact />
          <Route path="/m/:username" component={SendMessage} exact/>
        </Switch>
      </Router> */}
    </Fragment>
  )
}