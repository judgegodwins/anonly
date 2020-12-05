import React from 'react'
import Button from './Button'

import 'Styles/bottomnavbar';

function BottomNavigationBar() {
  return (
    <div className="bottom_navbar">
      <div className="bottom_navbar_main">
        <div className="main_button_container">
          <Button 
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%'
            }}
          >

          </Button>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigationBar;