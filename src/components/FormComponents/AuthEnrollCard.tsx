import Typography from '../../components/Typography';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardProps {
  onSubmit?: (e: Event) => any;
  bottomRedirect: string;
}

const AuthCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
  background: #fff;
  padding: 27px 25px;

  .redirect {
    position: absolute;
    bottom: 27px;
    left: 25px;
    font-size: 15px;
  }
`


const AuthEnrollCard: FC<CardProps> = (props) => {
  return (
    <AuthCard>
      {props.children}
      <Typography type="p" className="redirect">
        Have an account already? <Link to={props.bottomRedirect}>Log in</Link>
      </Typography>
    </AuthCard>
  )
}

export default AuthEnrollCard

