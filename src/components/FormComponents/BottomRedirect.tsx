import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import { Link } from 'react-router-dom';

const RedirectBase = styled.p`
  position: absolute;
  bottom: 27px;
  left: 25px;
  font-size: 15px;
`
interface RedirectProps {
  to: string;
  text: string;
  linkText: string;
}

const BottomRedirect: FC<RedirectProps> = (props): JSX.Element => {
  return (
    <Typography component={RedirectBase} type="outstand-p" className="redirect">
      {props.text} <Link to={props.to}>{props.linkText}</Link>
    </Typography>
  )
}

export default BottomRedirect;