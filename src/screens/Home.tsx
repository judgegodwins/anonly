import React, { Component, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { styleConfig } from "config";
import DesktopBar from "components/HomeScreenComponents/DesktopBar";
import Message from "components/HomeScreenComponents/Message";
import MessagesListContainer from "components/HomeScreenComponents/MessagesListContainer";
import MessagesWrapper from "components/HomeScreenComponents/MessagesWrapper";
import MobileHomeHeader from "components/HomeScreenComponents/MobileHomeHeader";
import MessageService from "services/MessageService";

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${styleConfig.color.secondary};
  display: flex;
`;
const Home: FC<{}> = (props) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    MessageService.getMessages().then(({ data: { data } }) => {
      setMessages(data);
    });
  }, []);

  return (
    <HomeWrapper>
      <MobileHomeHeader username="judge" />
      <DesktopBar username="judge" />
      <MessagesWrapper>
        <MessagesListContainer>
          {messages.map((message) => (
            <Message key={message._id} text={message.text} />
          ))}
        </MessagesListContainer>
      </MessagesWrapper>
    </HomeWrapper>
  );
};

export default Home;
