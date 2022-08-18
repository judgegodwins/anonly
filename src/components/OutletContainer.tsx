import { FC } from "react";
import styled from "styled-components";
import { styleConfig } from 'config';
import { ThemeProp } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";

const OutletContainerBase = styled.div<ThemeProp>`
  margin-top: 156px;
  margin-bottom: 0;
  width: 100%;
  height: calc(100% - 156px);
  /* overflow: scroll; */
  padding: 20px ${(props) => props.themeConfig.screenPadding.mobile};
  background: ${(props) => props.themeConfig.color.secondary};
  overflow-y: auto;

  @media only screen and (min-width: 1366px) {
    margin-top: 0;
    padding: 86px 167px;
    height: 100%;
  }
`

const OutletContainer: FC<{}> = ({ children }) => {
  const theme = useAppSelector(({ theme }) => theme);
  return (
    <OutletContainerBase themeConfig={theme}>
      {children}
    </OutletContainerBase>
  );
};

export default OutletContainer;