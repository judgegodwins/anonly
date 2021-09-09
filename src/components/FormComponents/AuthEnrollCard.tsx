import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
  onSubmit?: (e: Event) => any
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
      <p className="redirect">Have an account already? <a href="#">Log in</a></p>
    </AuthCard>
  )
}

export default AuthEnrollCard

