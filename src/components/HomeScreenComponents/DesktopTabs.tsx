import Typography from "components/Typography";
import { styleConfig } from "config";
import { FC } from "react";
import styled from "styled-components";

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TabListItemBase = styled.li`
  width: 100%;
  padding: ${styleConfig.screenPadding.mobile};
  position: relative;
`;
const Marker = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: #fff;
  border-radius: 10px 0px 0px 10px;
`;
const TabListItem: FC = (props) => (
  <TabListItemBase>
    {props.children}
    <Marker />
  </TabListItemBase>
);

const DesktopTabs = () => (
  <TabList>
    <TabListItem>
      <Typography type="outstand-p" color="#fff">
        Messages
      </Typography>
    </TabListItem>
  </TabList>
);

export default DesktopTabs;
