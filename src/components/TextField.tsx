import React, { FC, useRef } from "react";
import styled from "styled-components";

import Typography from "./Typography";
import InputHelperText from "./InputHelperText";
import { styleConfig } from "config";


export interface TextFieldBaseProps {
  helperText?: string | false;
  error?: boolean;
}

type TextFieldProps = TextFieldBaseProps & React.HTMLProps<HTMLInputElement>;

const Wrapper = styled.div``;

const FieldGroup = styled.div<TextFieldBaseProps>`
  position: relative;
  padding: 20px;
  width: 100%;
  background: ${styleConfig.color.secondary};
  border: ${(props: TextFieldBaseProps) => {
    return props.error ? "1px solid #f00" : "none";
  }};
  border-radius: 15px;

  &:focus {
    border: 2px solid ${styleConfig.color.adjustPrimary};
  }
`;
const Label = styled.label`
  position: absolute;
  top: 20px;
  display: block;
  transition: 0.2s;
  transition: 0.2s;
  top: 10px;
  font-size: 10px;
  /* line-height: 12.19px; */
  color: #9b9b9b;
`;
const PlainTextField = styled.input`
  width: 100%;
  background: transparent;

  outline: none;
  padding: 0;
  font-size: 14px;
  line-height: 17px;
  border: none;
  color: ${styleConfig.color.text};
  font-family: "IBM Plex Sans", sans-serif;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .text_label {
    font-size: 14px;
    cursor: text;
    top: 20px;
  }

  &:not(:placeholder-shown) {
    margin-top: 10px;
  }

  &:focus {
    & ~ .text_label {
      font-size: 10px;
      top: 10px;
    }

    margin-top: 10px;
  }
`;

const TextField: FC<TextFieldProps> = (props) => {
  const cover = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <FieldGroup ref={cover} error={props.error}>
        <PlainTextField
          onFocus={() => {
            if (cover.current)
              cover.current.style.border = `2px solid ${styleConfig.color.adjustPrimary}`;
          }}
          onBlur={() => {
            if (cover.current) cover.current.style.border = "unset";
          }}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          type={props.type}
        />
        <Label htmlFor={props.id} className="text_label">
          {props.placeholder}
        </Label>
      </FieldGroup>

      {props.helperText && (
        <InputHelperText error={props.error} text={props.helperText} />
      )}
    </Wrapper>
  );
};

export default TextField;
