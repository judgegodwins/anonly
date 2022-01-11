import { FC } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { styleConfig } from "../config";
import { TextFieldBaseProps } from "./TextField";
import InputHelperText from "./InputHelperText";

interface TextAreaProps extends Pick<TextFieldBaseProps, "helperText" | "error"> {
  height?: string;
  width?: string;
}

const TextAreaBase = styled.textarea<TextAreaProps>`
  height: ${(props) => props.height || "unset"};
  width: ${(props) => props.width || "unset"};
  outline: none;
  border: ${(props) =>
    `2px solid ${props.error ? "#f00" : styleConfig.color.adjustPrimary}`};
  border-radius: 15px;
  background: ${styleConfig.color.secondary};
  padding: 20px;
  color: ${styleConfig.color.text};
`;

const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <div>
      <TextAreaBase {...props} />

      {props.helperText && (
        <InputHelperText error={props.error} text={props.helperText} />
      )}
    </div>
  );
};
export default TextArea;
