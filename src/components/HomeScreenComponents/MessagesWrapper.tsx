import { styleConfig } from 'config';
import styled from 'styled-components';

const MessagesWrapper = styled.div`
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
export default MessagesWrapper;