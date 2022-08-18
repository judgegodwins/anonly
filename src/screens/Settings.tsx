import { FC } from "react";
import styled from "styled-components";
import { Outlet, useLocation, Link } from "react-router-dom";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ForwardArrow from "svg/ForwardArrow.svg";

interface ShowPane {
  show: boolean;
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexItem = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;

  @media only screen and (min-width: 1366px) {
    &:first-child {
      padding-right: 12px;
    }
    &:not(:first-child) {
      padding-left: 12px;
    }
  }
`;

const BasePane = styled(FlexItem)<ShowPane>`
  display: ${(props) => (props.show ? "block" : "none")};

  @media only screen and (min-width: 1366px) {
    display: block;
  }
`;

const Further = styled(FlexItem)<ShowPane>`
  display: ${(props) => (props.show ? "block" : "none")};

  @media only screen and (min-width: 1366px) {
    display: block;
  }
`;

const Settings: FC<{}> = () => {
  const location = useLocation();

  const settingsPath = location.pathname.slice(
    location.pathname.indexOf("settings")
  );

  const split = settingsPath.split("/");

  const onChildPath = split.length > 1 && !!split[1];

  return (
    <FlexContainer>
      <BasePane show={!onChildPath}>
        <List>
          <Link to="profile">
            <ListItem text="Edit profile" action={<ForwardArrow />}></ListItem>
          </Link>
          <Link to="auth">
            <ListItem text="Change password" action={<ForwardArrow />} />
          </Link>
          {/* <Link to="email">
            <ListItem text="Edit email address" action={<Plus />} />
          </Link> */}
          {/* <ListItem text="Push notifications" action={<Toggle />} /> */}
          <Link to="theme">
            <ListItem text="Customize theme" action={<ForwardArrow />} />
          </Link>
        </List>
      </BasePane>
      <Further show={onChildPath}>
        <Outlet />
      </Further>
    </FlexContainer>
  );
};

export default Settings;
