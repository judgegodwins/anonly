import { FC } from "react";
import Typography from "./Typography";
import styled from "styled-components";
import { useAppSelector } from "hooks/reduxHooks";
import { ThemeProp } from "types/common";

interface HeaderWrapperProps {
  height?: string;
  width?: string;
  noSidePadding?: boolean;
  noSidePaddingDesktop?: boolean;
}

interface HeaderProps extends HeaderWrapperProps {
  type: "primary" | "secondary";
  firstText: string;
  outstandingText: string;
}

const HeaderWrapper = styled.div<HeaderWrapperProps & ThemeProp>`
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || 'fit-content'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${(props) => props.noSidePadding ? 0 : props.themeConfig.screenPadding.mobile};
  
  @media only screen and (min-width: 1366px) {
    padding: 0 ${(props) => props.noSidePaddingDesktop ? 0 : props.themeConfig.screenPadding.mobile};
  }
`

const Header: FC<HeaderProps> = (props) => {

  const themeConfig = useAppSelector(({ theme }) => theme);

  return (
    <HeaderWrapper {...props} themeConfig={themeConfig}>
      <Typography 
        color={themeConfig.color.headerText.firstText[props.type]} 
        type="outstand-p"
      >
        {props.firstText}
      </Typography>
      <Typography
        style={{marginTop: 10}} 
        color={themeConfig.color.headerText.outstandingText[props.type]} 
        // component="h1"
        type="h1"
      >
        {props.outstandingText}
      </Typography>
    </HeaderWrapper>
  )
}

export default Header;