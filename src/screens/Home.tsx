import React, { Component, FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { Message } from "types/message";
import { styleConfig } from "config";
import DesktopBar from "components/HomeScreenComponents/DesktopBar";
import MobileHomeHeader from "components/HomeScreenComponents/MobileHomeHeader";
import OutletContainer from "components/OutletContainer";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { getProfile } from "slices/auth/actions";
import { ThemeProp } from "types/common";

const HomeWrapper = styled.div<ThemeProp>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.themeConfig.color.secondary};
  display: flex;
`;

const Home: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ theme }) => theme);

  useEffect(() => {
    dispatch(getProfile())
  }, []);
  return (
    <HomeWrapper themeConfig={theme}>
      <MobileHomeHeader />
      <DesktopBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </HomeWrapper>
  );
};

export default Home;
