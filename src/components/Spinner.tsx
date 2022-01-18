import { styleConfig } from "config";
import styled from "styled-components";

interface SpinnerProps {
  size?: string | number;
  spinnerColor?: "primary" | "secondary";
}

const getSize = ({ size }: SpinnerProps) => {
  if (!size) return '1em';
  if (typeof size === 'number') return `${size}px`;
  return size;
}

const Spinner = styled.div<SpinnerProps>`
  width: ${getSize};
  height: ${getSize};
  background: transparent;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, .3);
  border-top: 2px solid ${(props) => props.spinnerColor === 'primary' ? styleConfig.color.primary : '#fff'};
  animation: animate 1.5s infinite linear;

  @keyframes animate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Spinner;