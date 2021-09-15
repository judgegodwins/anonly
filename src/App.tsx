import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './GlobalStyle';
import Signup from './screens/Signup';
import Login from './screens/Login';
import SendMessage from './screens/SendMessage';
import Home from 'screens/Home';

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
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/m/:username" component={SendMessage} exact/>
        </Switch>
      </Router>
    </Fragment>
  )
}