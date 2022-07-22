import { styleConfig } from "config";
import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const ToggleBase = styled.label`
  --width: 56px;
  --height: 29px;
  --border-radius: 20px;
  --toggle-size: 22px;

  display: inline-block;
  cursor: pointer;
`;

const ToggleInput = styled.input`
  display: none;

  &:checked ~ #toggle_fill {
    background: ${styleConfig.color.primary};
  }

  &:checked ~ #toggle_fill::after {
    transform: translateX(calc(var(--toggle-size) + 5px));
  }
`;

const ToggleFill = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  background: #ddd;
  transition: background 0.2s;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    height: var(--toggle-size);
    width: var(--toggle-size);
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    transition: transform 0.2s;
  }
`;

const Toggle: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <ToggleBase htmlFor="toggle_input">
    <ToggleInput type="checkbox" id="toggle_input" {...props} />
    <ToggleFill id="toggle_fill"/>
  </ToggleBase>
)

export default Toggle;