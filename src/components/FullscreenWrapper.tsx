import { FC } from 'react'
import { styleConfig } from "config";
import styled from "styled-components"

interface WrapperProps {
  color: "primary" | "secondary" | "white";
  id?: string;
}

const FullscreenWrapperBase = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${(props: WrapperProps) => styleConfig.color[props.color]};
  /* padding: ${styleConfig.screenPadding.mobile + 'px'}; */

  @media only screen and (min-width: 900px) {
    padding: 0 20%;
  }
`
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const FullscreenWrapper: FC<WrapperProps> = (props) => (
  <FullscreenWrapperBase {...props}>
    <Container>
      {props.children}
    </Container>
  </FullscreenWrapperBase>
)

export default FullscreenWrapper;