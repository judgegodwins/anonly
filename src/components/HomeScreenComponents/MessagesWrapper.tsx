import { FC } from 'react';
import styled from 'styled-components';
import { styleConfig } from 'config';
import { useAppSelector } from 'hooks/reduxHooks';
import { ThemeProp } from 'types/common';

const MessagesWrapperBase = styled.div<ThemeProp>`
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  background: ${styleConfig.color.secondary};
  flex: 1;
  
  /* padding:  ${styleConfig.screenPadding.mobile}; */

  @media only screen and (min-width: 1366px) {
    width: 75%;
  }
`

const MessagesWrapper: FC<{}> = (props) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <MessagesWrapperBase {...props} themeConfig={theme} />
  )
}

export default MessagesWrapper;
