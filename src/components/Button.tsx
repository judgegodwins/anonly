import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  fullWidth?: Boolean;
  onClick?: (e: Event) => any;
}

const ButtonBase = styled.button`
  background: #2185DC;
  border-radius: 15px;
  outline: none;
  padding: 11px 40px;
  color: #fff;
  border: none;
  width: ${(props: ButtonProps) => props.fullWidth ? '100%' : 'unset'};
`

const Button: FC<ButtonProps> = (props) => (
  <ButtonBase fullWidth={props.fullWidth}>
    {props.children}
  </ButtonBase>
)

export default Button;