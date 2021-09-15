import React, { CSSProperties, FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  to?: string;
  href?: string;
  as?: React.ComponentType<any> | string;
  style?: CSSProperties;
  fullWidth?: Boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> & ((e: MouseEvent) => any);
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
  <ButtonBase 
    as={props.as} 
    to={props.to}
    href={props.href} 
    onClick={props.onClick} 
    style={props.style} 
    fullWidth={props.fullWidth}
  >
    {props.children}
  </ButtonBase>
)

export default Button;