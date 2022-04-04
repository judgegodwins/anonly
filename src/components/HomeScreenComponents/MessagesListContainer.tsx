import styled from 'styled-components';
import { styleConfig } from 'config';


const MessagesListContainer = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 156px;
  margin-bottom: 0;
  width: 100%;
  height: calc(100% - 156px);
  /* overflow: scroll; */
  padding: 20px ${styleConfig.screenPadding.mobile};
  background: ${styleConfig.color.secondary};
  overflow-y: auto;

  @media only screen and (min-width: 1366px) {
    margin-top: 0;
    padding: 86px 167px;
    height: 100%;
  }
`
export default MessagesListContainer;
