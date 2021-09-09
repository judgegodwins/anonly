import TextField from './components/TextField';
import React, { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import Padding from './components/Padding';
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

      <Login />
    </Fragment>
  )
}