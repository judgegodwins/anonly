/**
 * Work in progress
 * Component for handling text
 */


import React, { FC } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { styleConfig } from '../config';

/**
 * Types allowed
 */
type ElementTypes =  'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TypographyProps {
  color?: string;
  component?: ElementTypes | 'span' | AnyStyledComponent;
  type: ElementTypes | 'outstand-p';
  style?: {
    [item: string]: string | number;
  }
  [prop: string]: any;
}

type Styles = {
  [el in TypographyProps['type']]?: string | number;
}

const selectStyle = (styles: Styles, defaultStyle: string | number) => {
  return (props: TypographyProps) => {
    if (!styles[props.type]) return defaultStyle;
    return styles[props.type];
  }
}

const Typography: FC<TypographyProps> = ({ color, component = 'span', type, children, ...rest }) => {

  const TypographyBase = styled(component)`
    font-size: ${selectStyle({p: '14px', 'outstand-p': '15px', h1: '32px', h5: '16px'}, '14px')};
    font-weight: ${selectStyle({ p: 400, 'outstand-p': 500, h1: 700, h5: 700 }, 400)};
    color: ${(props) => color ? color : styleConfig.color.text};
    line-height: ${selectStyle({h1: '39px'}, 'unset')};
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