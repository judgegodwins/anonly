import React from 'react';

import styled from 'styled-components';

const FieldGroup = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  background: #F0F2F4;
  border-radius: 15px; 
`

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
`

const PlainTextField = styled.input`
  width: 100%;
  background: transparent;
 
  outline: none;
  padding: 0;
  font-size: 14px;
  line-height: 17px;
  color: #243442;
  border: none;
  font-family: 'Montserrat', sans-serif;

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


`
interface TextFieldProps {
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string
}

export default function TextField(props: TextFieldProps) {
  return (
    <FieldGroup>
      <PlainTextField
        type={props.type || "text"}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
      />
      <Label htmlFor={props.id} className="text_label">{props.placeholder}</Label>
    </FieldGroup>
  )
}