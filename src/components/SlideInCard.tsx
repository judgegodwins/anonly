import React, { FC } from 'react';
import styled from 'styled-components';

interface CardProps {
  height?: string | number;
}

const SlideInCard = styled.div`
  position: relative;
  width: 100%;
  height: ${(props: CardProps) => props.height || '100%'};
  border-radius: 30px 30px 0 0;
  background: #fff;
  padding: 27px 25px;
`


// const SlideInCard: FC<CardProps> = (props) => {
//   return (
//     <CardBase>
//       {props.children}
//     </CardBase>
//   )
// }

export default SlideInCard;

