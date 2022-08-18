import React, { FC, HTMLProps } from "react";
import styled, { CSSProperties, ThemedStyledProps, StyledComponentProps } from "styled-components";
import Button, { ButtonProps } from "./Button";
import Spinner from "./Spinner";

/**
 * Props for LoadingButton. Note: More work is needed in this typing
 */
interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean;
  type: "button" | "reset" | "submit";
  style?: CSSProperties
}

const LoadingButton: FC<LoadingButtonProps> = ({ isLoading, children, ...rest }) => (
  <Button {...rest}>
    {isLoading ? <Spinner size={20} /> : children}
  </Button>
);

export default LoadingButton;