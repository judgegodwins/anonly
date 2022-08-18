import React, { FC, useMemo } from "react";
import Header from "components/Header";
import styled from "styled-components";
import { DetailProps, ThemeProp } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";
import Typography from "components/Typography";
import Button from "components/Button";
import { useShareDialog } from "contexts/shareContext";
import { Link, useLocation } from "react-router-dom";
import { barPaths, getPathComponent } from "helpers";
import { sentenceCase } from "change-case";

const MobileHeaderWrapper = styled.div<ThemeProp>`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background: #fff;
  padding: 0 ${(props) => props.themeConfig.screenPadding.mobile};

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

const IndicatorsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
`;

const IndicatorBase = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const BlueIndicator = styled.div<ThemeProp>`
  position: absolute;
  bottom: 0;
  /* width: 100% */
  background: ${(props) => props.themeConfig.color.primary};
  border-radius: 5px 5px 0px 0px;
  height: 5px;
  width: 100%;
`;

const Top: FC<DetailProps & ThemeProp> = (props) => {
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
        textColor={props.themeConfig.color.text}
        // href={encodeURI(`https://api.whatsapp.com/send?text=Send me an anonymous message on Anonly Beta https://anonly.netlify.app/m/${props.username}`)}
      >
        Share link
      </Button>
    </TopWrapper>
  );
};

const IndicatorItem: FC<{ text: string; to: string; isActive: boolean } & ThemeProp> = ({
  text,
  to,
  isActive,
  themeConfig
}) => (
  <IndicatorBase as={Link} to={to}>
    <Typography type="p" style={{ marginBottom: 10 }}>
      {text}
    </Typography>
    {isActive && <BlueIndicator themeConfig={themeConfig}/>}
  </IndicatorBase>
);

const MobileHomeHeader: FC<{}> = () => {
  const user = useAppSelector(({ auth }) => auth.user);
  const theme = useAppSelector(({ theme }) => theme);
  const location = useLocation();

  const secondPathComponent = useMemo(
    () => getPathComponent(location.pathname, 1),
    [location.pathname]
  );

  return (
    user && (
      <MobileHeaderWrapper themeConfig={theme}>
        <Top username={user.username} themeConfig={theme} />
        <IndicatorsWrapper>
          {barPaths.map((path, index) => (
            <IndicatorItem
              themeConfig={theme}
              key={`path-${index}`}
              text={sentenceCase(path)}
              to={`/home/${path}`}
              isActive={secondPathComponent === path}
            />
          ))}
        </IndicatorsWrapper>
      </MobileHeaderWrapper>
    )
  );
};

export default MobileHomeHeader;
