import React, { FC } from "react";
import styled from "styled-components";

/**
 * Types allowed
 */
type ElementTypes =  'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TypographyProps {
  color?: string;
  component?: ElementTypes | 'span';
  type: ElementTypes | 'outstand-p';
  style?: {
    [item: string]: string | number
  }
}

/**
 * Work in progress
 * Component for handling text
 */

const Typography: FC<TypographyProps> = ({ color, component = 'span', type, children, ...rest }) => {

  const TypographyBase = styled(component)`
    font-size: ${(props: TypographyProps) => {
      switch(props.type) {
        case 'p':
          return '14px';
        case 'outstand-p':
          return '15px';
        case 'h1':
          return '32px';
        case 'h5':
          return '16px';
        default:
          return '14px'
      }
    }};
    font-weight: ${(props: TypographyProps) => {
      switch(props.type) {
        case 'p':
          return '400';
        case 'outstand-p':
          return '400';
        case 'h1':
          return '700';
        case 'h5':
          return '700';
        default:
          return '400';
      }
    }};
    color: ${(props) => color ? color : 'unset'};
    line-height: ${props => {
      switch(props.type) {
        case 'h1':
          return '39px';
        default:
          return 'unset';
      }
    }};
  `
  return (
    <TypographyBase 
      component={component} 
      type={type} 
      {...rest}
    >
      {children}
    </TypographyBase>
  )
}

export default Typography;