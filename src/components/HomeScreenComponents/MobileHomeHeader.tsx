import React, { FC } from "react";
import Header from "components/Header";
import styled from "styled-components";
import { styleConfig } from "config";
import { DetailProps } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";
import Typography from "components/Typography";
import Button from "components/Button";
import { useShareDialog } from "contexts/shareContext";

const MobileHeaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background: #fff;
  padding: 0 ${styleConfig.screenPadding.mobile};

  @media only screen and (min-width: 1366px) {
    display: none;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 0 20px;
`;

const IndicatorWrapper = styled.div`
  width: 100%;
`;
const IndicatorBase = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
`;
const BlueIndicator = styled.div`
  position: absolute;
  bottom: 0;
  /* width: 100% */
  background: ${styleConfig.color.primary};
  border-radius: 5px 5px 0px 0px;
  height: 5px;
  width: 100%;
`;

const Top: FC<DetailProps> = (props) => {
  const { openDialog } = useShareDialog();
  return (
    <TopWrapper>
      <Header
        noSidePadding
        type="secondary"
        firstText="Welcome ✨"
        outstandingText={props.username}
      />

      <Button
        onClick={openDialog}
        variant="transparent"
        style={{ padding: "10px 5px" }}
        textColor={styleConfig.color.text}
        // href={encodeURI(`https://api.whatsapp.com/send?text=Send me an anonymous message on Anonly Beta https://anonly.netlify.app/m/${props.username}`)}
      >
        Share link
      </Button>
    </TopWrapper>
  );
};

const Indicator = () => (
  <IndicatorWrapper>
    <IndicatorBase>
      <Typography type="p" fontWeight={500} style={{ marginBottom: 10 }}>
        Messages
      </Typography>
      <BlueIndicator />
    </IndicatorBase>
  </IndicatorWrapper>
);

const MobileHomeHeader: FC<{}> = () => {
  const user = useAppSelector(({ auth }) => auth.user);

  return (
    user && (
      <MobileHeaderWrapper>
        <Top username={user.username} />
        <Indicator />
      </MobileHeaderWrapper>
    )
  );
};

export default MobileHomeHeader;
