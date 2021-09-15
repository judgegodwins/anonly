import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
  height?: string | number;
}

const CardBase = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props: CardProps) => props.height || 'fit-content'};
  border-radius: 30px 30px 0 0;
  background: #fff;
  padding: 27px 25px;
  bottom: 0;
`
const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
`;

const FixedWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const SlideInCard: FC<CardProps> = (props) => {
  return (
    <FixedWrapper>
      <CardWrapper>
        <CardBase {...props}>
          {props.children}
        </CardBase>
      </CardWrapper>
    </FixedWrapper>
  )
}

export default SlideInCard;

