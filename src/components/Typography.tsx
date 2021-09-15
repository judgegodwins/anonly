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

type ElementTypes = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TypographyProps {
  color?: string;
  component?: ElementTypes | 'span' | AnyStyledComponent;
  type: ElementTypes | 'outstand-p';
  style?: React.CSSProperties;
  [prop: string]: any;
}

type Styles = {
  [el in TypographyProps['type']]?: string | number;
}

interface BaseProps {
  color?: string;
  type: TypographyProps['type'];
}

const selectStyle = (styles: Styles, defaultStyle: string | number) => {
  return (props: BaseProps) => {
    if (!styles[props.type]) return defaultStyle;
    return styles[props.type];
  }
}

const TypographyBase = styled.span`

  font-size: ${selectStyle({ p: '14px', 'outstand-p': '15px', h1: '32px', h2: '24px', h4: '18px', h5: '16px' }, '14px')};
  font-weight: ${selectStyle({ p: 400, 'outstand-p': 500, h1: 700, h2: 600, h4: 500, h5: 700 }, 400)};
  color: ${(props: BaseProps) => props.color || styleConfig.color.text};
  line-height: ${selectStyle({ h1: '39px', h2: '29px' }, 'unset')};

`;

const Typography: FC<TypographyProps> = ({ color, component = 'span', type, children, ...rest }) => {

  return (
    <TypographyBase
      as={component}
      type={type}
      color={color}
    >
      {children}
    </TypographyBase>
  )
}

export default Typography;