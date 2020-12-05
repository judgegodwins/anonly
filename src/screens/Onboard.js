import React from 'react';


import 'Styles/onboard'
import logo from 'Images/logo'

import Button from 'Components/Button'
import InkWell from 'Components/InkWell';

function Onboard() {

  return (
    <div className="on-board">
      <div className="top-bar">
        <div id="logo">
          <img src={logo} alt="Citibank logo"/>
        </div>
        <InkWell>
          <div className="icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </InkWell>
      </div>
      <div className="grown full-width">
        <div className="about">
          <h1>Banking App</h1>
          <h2>Transfer money</h2>
          <p>
            Simplifies and speeds up <br />
            processing international <br />payments
          </p>
        </div>
        <div className="buttons-div full-width">
          <Button color="#000" fullWidth>
            Log in
          </Button>
          <Button 
            fullWidth
            style={{
              marginTop: '15px'
            }}
          >
            Become a client
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Onboard