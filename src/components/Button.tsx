import { ButtonHTMLAttributes, FC } from 'react';
import styled from "styled-components";
import { ThemeProp } from 'types/common';
import { useAppSelector } from 'hooks/reduxHooks';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: Boolean;
  variant?: "primary" | "secondary" | "transparent" | "danger" | "semi-primary";
  textColor?: string;
  bg?: string;
}

const ButtonBase = styled.button<ButtonProps & ThemeProp>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ variant, bg, themeConfig }) => {
    const {
      adjustPrimary: primary,
      secondary,
      semiPrimary,
      error
    } = themeConfig.color;
    if (bg) return bg;
    if (!variant) return primary;
    if (variant === "primary") return primary;
    if (variant === "secondary") return secondary;
    if (variant === "danger") return error;
    if (variant === "transparent") return "transparent";
    if (variant === "semi-primary") return semiPrimary;
  }};
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  padding: 11px 40px;
  color: ${({ variant, textColor, themeConfig }) =>
    variant === "secondary" || variant === "transparent"
      ? textColor || themeConfig.color.textSecondary
      : "#fff"};
  border: none;
  width: ${(props: ButtonProps) => (props.fullWidth ? "100%" : "unset")};
  font-weight: 500;
`;

const Button: FC<ReturnType<typeof ButtonBase>['props']> = ({ children, ...props }) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <ButtonBase { ...props } themeConfig={theme}>
      {children}
    </ButtonBase>
  )
}

export default Button;
