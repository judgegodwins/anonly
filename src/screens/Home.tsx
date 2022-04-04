import React, { Component, FC, useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { Message } from "types/message";
import { styleConfig } from "config";
import DesktopBar from "components/HomeScreenComponents/DesktopBar";
import MobileHomeHeader from "components/HomeScreenComponents/MobileHomeHeader";
import MessageList from "components/Messages";

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${styleConfig.color.secondary};
  display: flex;
`;

const Home: FC<{}> = () => {
  return (
    <HomeWrapper>
      <MobileHomeHeader />
      <DesktopBar />
      <MessageList />
    </HomeWrapper>
  );
};

export default Home;
