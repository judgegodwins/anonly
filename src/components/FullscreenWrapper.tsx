import { FC } from "react";
import styled from "styled-components";
import { ThemeProp } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";

interface WrapperProps {
  color: "primary" | "secondary" | "white";
  id?: string;
}

const FullscreenWrapperBase = styled.div<WrapperProps & ThemeProp>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.themeConfig.color[props.color]};

  @media only screen and (min-width: 1366px) {
    padding: 0 20%;
  }

  @media only screen and (min-height: 1366px) {
    padding: 20% 20%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FullscreenWrapper: FC<WrapperProps> = (props) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <FullscreenWrapperBase {...props} themeConfig={theme}>
      <Container>{props.children}</Container>
    </FullscreenWrapperBase>
  );
};

export default FullscreenWrapper;
