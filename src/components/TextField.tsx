import React, { FC, useRef } from "react";
import styled from "styled-components";

import Typography from "./Typography";
import InputHelperText from "./InputHelperText";
import { useAppSelector } from "hooks/reduxHooks";
import { ThemeProp } from "types/common";

export interface TextFieldBaseProps {
  helperText?: string | false;
  error?: boolean;
  background?: "primary" | "secondary";
}

type TextFieldProps = TextFieldBaseProps & React.HTMLProps<HTMLInputElement>;

const Wrapper = styled.label``;

const FieldGroup = styled.div<TextFieldBaseProps & ThemeProp>`
  position: relative;
  padding: 20px;
  width: 100%;
  background: ${(props) =>
    props.background === "primary"
      ? props.themeConfig.color.white
      : props.themeConfig.color.secondary};
  border: ${(props: TextFieldBaseProps) => {
    return props.error ? "1px solid #f00" : "none";
  }};
  border-radius: 15px;

  &:focus {
    border: 2px solid ${(props) => props.themeConfig.color.adjustPrimary};
  }
`;

const Placeholder = styled.div`
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
const PlainTextField = styled.input<ThemeProp>`
  width: 100%;
  background: transparent;

  outline: none;
  padding: 0;
  font-size: 14px;
  line-height: 17px;
  border: none;
  color: ${(prop) => prop.themeConfig.color.text};
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
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <Wrapper htmlFor={props.id}>
      <FieldGroup
        themeConfig={theme}
        ref={cover}
        error={props.error}
        background={props.background}
      >
        <PlainTextField
          themeConfig={theme}
          onFocus={() => {
            if (cover.current)
              cover.current.style.border = `2px solid ${theme.color.adjustPrimary}`;
          }}
          onBlur={() => {
            if (cover.current) cover.current.style.border = "unset";
          }}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
        />
        <Placeholder className="text_label">{props.placeholder}</Placeholder>
      </FieldGroup>

      {props.helperText && (
        <InputHelperText error={props.error} text={props.helperText} />
      )}
    </Wrapper>
  );
};

export default TextField;
