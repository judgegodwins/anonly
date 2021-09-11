import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  style?: CSSProperties;
  fullWidth?: Boolean;
  onClick?: (e: Event) => any;
}

const ButtonBase = styled.button`
  background: #2185DC;
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  padding: 11px 40px;
  color: #fff;
  border: none;
  width: ${(props: ButtonProps) => props.fullWidth ? '100%' : 'unset'};
  font-weight: 500;
`

const Button: FC<ButtonProps> = (props) => (
  <ButtonBase style={props.style} fullWidth={props.fullWidth}>
    {props.children}
  </ButtonBase>
)

export default Button;