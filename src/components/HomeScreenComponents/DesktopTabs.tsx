import Typography from "components/Typography";
import { styleConfig } from "config";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TabListItem = styled.li`
  width: 100%;
  padding: ${styleConfig.screenPadding.mobile};
  position: relative;
  transition: 100ms ease-out;

  &:hover {
    background: ${styleConfig.color.semiPrimary};
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: #fff;
    border-radius: 10px 0px 0px 10px;
  }
`;
// const Marker = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 10px;
//   height: 100%;
//   background: #fff;
//   border-radius: 10px 0px 0px 10px;
// `;

const DesktopTabs = () => (
  <TabList>
    <TabListItem>
      <Link to="/home/messages">
        <Typography type="outstand-p" color="#fff">
          Messages
        </Typography>
      </Link>
    </TabListItem>
    <TabListItem>
      <Link to="/home/settings">
        <Typography type="outstand-p" color="#fff">
          Settings
        </Typography>
      </Link>
    </TabListItem>
  </TabList>
);

export default DesktopTabs;
