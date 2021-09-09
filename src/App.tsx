import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './GlobalStyle';
import Signup from './screens/Signup';
import Login from './screens/Login';

export default function App() {

  return (
    <Fragment>
      <GlobalStyle />
      {/* <Padding padding={20}>
        <TextField
          id="name"
          placeholder="Name"

        />
      </Padding>
      <Padding padding={[10, 10, 10, 10]}>
        <p>Hello world loremm dsujsyhdhu hdsdgsudg hsudsuduasdugusgusdsdsdsdswd sdsdsdsys sdsdsgdsd</p>
      </Padding> */}

      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </Router>
    </Fragment>
  )
}