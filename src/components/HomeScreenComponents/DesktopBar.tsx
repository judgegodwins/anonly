import { FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { styleConfig } from 'config';
import { DetailProps } from 'types/common';
import DesktopTabs from './DesktopTabs';

const DesktopBarBase = styled.div`

  display: none; // do not display for desktop

  @media only screen and (min-width: 1366px) {
    display: block;
    width: 25%;
    background: ${styleConfig.color.primary};
    border-radius: 0px 30px 30px 0px;
  }
`;

const DesktopBar: FC<DetailProps> = (props) => (
  <DesktopBarBase>
    <Header
      height="25%"
      type="primary"
      firstText="Welcome ✨"
      outstandingText={props.username}
    />
    <DesktopTabs />
  </DesktopBarBase>
);

export default DesktopBar;