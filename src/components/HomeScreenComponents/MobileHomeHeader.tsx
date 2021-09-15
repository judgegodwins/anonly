import React, { FC } from 'react';
import Header from "components/Header";
import styled from 'styled-components';
import Typography from 'components/Typography';
import { styleConfig } from 'config';

interface MobileHeaderProps extends DetailProps {}

interface DetailProps {
  username: string;
}

const MobileHeaderWrapper = styled.div`
  width: 100%;
  padding: 47px ${styleConfig.screenPadding.mobile};
  color: #fff;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Top: FC<DetailProps> = (props) => (
  <TopWrapper>
    <Header
      noSidePadding
      type="secondary"
      firstText="Welcome ✨"
      outstandingText={props.username}
    />

    <Typography type="outstand-p" >
      Share link
    </Typography>
  </TopWrapper>
)

const MobileHomeHeader: FC<MobileHeaderProps> = (props) => (
  <MobileHeaderWrapper>
    <Top username={props.username}/>
  </MobileHeaderWrapper>
)

export default MobileHomeHeader;