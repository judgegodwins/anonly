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

interface BaseProps {
  color?: string;
  fontWeight?: number;
  type: ElementTypes | 'outstand-p' | 'subtext';
}

interface TypographyProps extends BaseProps {
  component?: ElementTypes | 'span' | AnyStyledComponent;
  style?: React.CSSProperties;
  [prop: string]: any;
}

type Styles = {
  [el in TypographyProps['type']]?: string | number;
}

const selectStyle = (styles: Styles, defaultStyle: string | number) => {
  return (props: BaseProps) => {
    if (!styles[props.type]) return defaultStyle;
    return styles[props.type];
  }
}

const TypographyBase = styled.span`

  font-size: ${selectStyle({ subtext: '12px', p: '14px', 'outstand-p': '15px', h1: '32px', h2: '24px', h4: '18px', h5: '16px' }, '14px')};
  font-weight: ${
    (props) => 
      props.fontWeight ||
      selectStyle({ subtext: 400, p: 400, 'outstand-p': 500, h1: 700, h2: 600, h4: 500, h5: 700 }, 400)(props)
  };
  color: ${(props: BaseProps) => props.color || styleConfig.color.text};
  line-height: ${selectStyle({ subtext: 1.57, h1: '39px', h2: '29px' }, 'unset')};
  
`;

const Typography: FC<TypographyProps> = ({ color, component = 'div', type, children, ...rest }) => {

  return (
    <TypographyBase
      as={component}
      type={type}
      color={color}
      {...rest}
    >
      {children}
    </TypographyBase>
  )
}

export default Typography;