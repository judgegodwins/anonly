import React, { Component } from 'react';
import styled from 'styled-components';
import MobileHomeHeader from 'components/HomeScreenComponents/MobileHomeHeader';
import { styleConfig } from 'config';


class Home extends Component<{}, {}> {

  render() {
    return (
      <MobileHomeHeader username="judge"/>
    )
  }
}

export default Home;