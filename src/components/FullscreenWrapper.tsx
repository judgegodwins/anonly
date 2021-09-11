import { styleConfig } from "../config";
import styled from "styled-components"

interface WrapperProps {
  color: "primary" | "secondary" | "white"
}

const FullscreenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${(props: WrapperProps) => styleConfig.color[props.color]};

  @media only screen and (min-width: 900px) {
    padding: 0 20%;
  }
`

export default FullscreenWrapper;