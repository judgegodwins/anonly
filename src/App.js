import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Onboard from 'Screens/Onboard'
import Home from 'Screens/Home'

import 'Styles/utilities'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Onboard} exact/>
        <Route path="/home" component={Home} exact/>
      </Switch>
    </Router>
  )
}

export default App