import Typography from "./Typography";
import React, { FC } from "react";
import styled from "styled-components";

import Padding from "./Padding";
import { styleConfig } from "../config";


interface HeaderProps {
  height?: string;
  type: "primary" | "secondary";
  firstText: string;
  outstandingText: string;
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${(props: { height: HeaderProps['height'] }) => props.height || '25%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${styleConfig.screenPadding.mobile + 'px'};
  
  @media only screen and (min-width: 961px) {
    padding: 0;
  }
`


const Header: FC<HeaderProps> = (props) => {

  return (
    <HeaderWrapper height={props.height}>
      <Typography 
        color={styleConfig.color.headerText.firstText[props.type]} 
        type="outstand-p"
      >
        {props.firstText}
      </Typography>
      <Typography
        style={{marginTop: 10, marginBottom: 10}} 
        color={styleConfig.color.headerText.outstandingText[props.type]} 
        component="h1" 
        type="h1"
      >
        {props.outstandingText}
      </Typography>
    </HeaderWrapper>
  )
}

export default Header;