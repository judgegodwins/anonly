import { styleConfig } from '../config';
import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  height?: string;
  width?: string;
}

const TextAreaBase = styled.textarea`
  height: ${(props: TextAreaProps) => props.height || 'unset'};
  width: ${(props: TextAreaProps) => props.width || 'unset'};
  outline: none;
  border: 2px solid ${styleConfig.color.adjustPrimary};
  border-radius: 15px;
  background: ${styleConfig.color.secondary};
  padding: 20px;
  color: ${styleConfig.color.text}
`
export default TextAreaBase;