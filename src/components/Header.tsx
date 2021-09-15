import Typography from "./Typography";
import React, { FC } from "react";
import styled from "styled-components";

import Padding from "./Padding";
import { styleConfig } from "../config";

interface HeaderWrapperProps {
  height?: string;
  width?: string;
  noSidePadding?: boolean
}

interface HeaderProps extends HeaderWrapperProps {
  type: "primary" | "secondary";
  firstText: string;
  outstandingText: string;
}

const HeaderWrapper = styled.div`
  width: ${(props: HeaderWrapperProps) => props.width || 'fit-content'};
  height: ${(props: HeaderWrapperProps) => props.height || 'fit-content'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${(props: HeaderWrapperProps) => props.noSidePadding ? 0 : styleConfig.screenPadding.mobile};
  
  @media only screen and (min-width: 961px) {
    padding: 0;
  }
`

const Header: FC<HeaderProps> = (props) => {

  return (
    <HeaderWrapper {...props}>
      <Typography 
        color={styleConfig.color.headerText.firstText[props.type]} 
        type="outstand-p"
      >
        {props.firstText}
      </Typography>
      <Typography
        style={{marginTop: 10, marginBottom: 10}} 
        color={styleConfig.color.headerText.outstandingText[props.type]} 
        // component="h1"
        type="h1"
      >
        {props.outstandingText}
      </Typography>
    </HeaderWrapper>
  )
}

export default Header;