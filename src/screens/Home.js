import React from 'react';
import BottomNavigationBar from 'Components/BottomNavigationBar';

import 'Styles/home';

function Home() {

  return (
    <div className="home">
      <div className="top-bar">
        <div>
          <span>citibank</span>
        </div>
        <div className="icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  )
}

export default Home