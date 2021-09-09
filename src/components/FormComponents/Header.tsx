import Typography from "../Typography";
import React, { FC } from "react";
import styled from "styled-components";

import Padding from "../Padding";
import { styleConfig } from "../../config";

interface HeaderProps {
  heading: string;
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${styleConfig.screenPadding.mobile + 'px'};
`

const Header: FC<HeaderProps> = (props) => {

  return (
    <HeaderWrapper>
      <Typography color="#A6CFF2" type="outstand-p">Hey There 👋🏾</Typography>
      <Typography style={{marginTop: 10, marginBottom: 10}} color="#fff" component="h1" type="h1">{props.heading}</Typography>
    </HeaderWrapper>
  )
}

export default Header;