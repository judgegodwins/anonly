import { FC } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { styleConfig } from "../config";
import { TextFieldBaseProps } from "./TextField";
import InputHelperText from "./InputHelperText";
import { useAppSelector } from "hooks/reduxHooks";
import { ThemeProp } from "types/common";

interface TextAreaProps extends Pick<TextFieldBaseProps, "helperText" | "error"> {
  height?: string;
  width?: string;
}

const TextAreaBase = styled.textarea<TextAreaProps & ThemeProp>`
  height: ${(props) => props.height || "unset"};
  width: ${(props) => props.width || "unset"};
  outline: none;
  border: ${(props) =>
    `2px solid ${props.error ? "#f00" : props.themeConfig.color.adjustPrimary}`};
  border-radius: 15px;
  background: ${(props) => props.themeConfig.color.secondary};
  padding: 20px;
  color: ${(props) => props.themeConfig.color.text};
`;

const TextArea: FC<TextAreaProps> = (props) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <div>
      <TextAreaBase {...props} themeConfig={theme}/>

      {props.helperText && (
        <InputHelperText error={props.error} text={props.helperText} />
      )}
    </div>
  );
};
export default TextArea;
