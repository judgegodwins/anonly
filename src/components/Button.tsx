import styled from 'styled-components';
import { styleConfig } from 'config';

export interface ButtonProps {
  fullWidth?: Boolean;
  variant?: 'primary' | 'secondary' | 'transparent' | 'danger'
  textColor?: string;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ variant }) => {
    const {adjustPrimary: primary, secondary} = styleConfig.color;
    if (!variant) return primary;
    if (variant === 'primary') return primary;
    if (variant === 'secondary') return secondary;
    if (variant === 'danger') return '#f00';
    if (variant === 'transparent') return 'transparent';
  }};
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  padding: 11px 40px;
  color: ${({ variant, textColor }) => 
    variant === 'secondary' || variant === 'transparent'
      ? textColor || styleConfig.color.textSecondary
      : '#fff'
  };
  border: none;
  width: ${(props: ButtonProps) => props.fullWidth ? '100%' : 'unset'};
  font-weight: 500;
`

export default Button;