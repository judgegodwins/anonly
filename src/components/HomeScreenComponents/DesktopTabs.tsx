import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { sentenceCase } from "change-case";
import { useAppSelector } from "hooks/reduxHooks";
import Typography from "components/Typography";
import { barPaths, getPathComponent } from "helpers";
import { ThemeProp } from "types/common";

interface TabListItemProps {
  text: string;
  to: string;
  isActive: boolean;
}

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TabListItemBase = styled.li<Pick<TabListItemProps, "isActive"> & ThemeProp>`
  width: 100%;
  padding: ${(props) => props.themeConfig.screenPadding.mobile};
  position: relative;
  transition: 100ms ease-out;
  background: ${(props) =>
    props.isActive ? (props) => props.themeConfig.color.semiPrimary : "transparent"};

  &:hover {
    background: ${(props) => props.themeConfig.color.semiPrimary};
  }

  &::after {
    display: ${(props) => (props.isActive ? "block" : "none")};
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: #fff;
    border-radius: 10px 0px 0px 10px;
  }
  & > a {
    width: 100%;
    height: 100%;
  }
`;

const TabListItem: FC<TabListItemProps> = ({ text, to, isActive }) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <TabListItemBase isActive={isActive} themeConfig={theme}>
      <Link to={to}>
        <Typography type="outstand-p" color="#fff">
          {text}
        </Typography>
      </Link>
    </TabListItemBase>
  );
};

const DesktopTabs = () => {
  const location = useLocation();

  const secondPathComponent = useMemo(
    () => getPathComponent(location.pathname, 1),
    [location.pathname]
  );

  return (
    <TabList>
      {barPaths.map((path, index) => (
        <TabListItem
          key={`path-${index}`}
          text={sentenceCase(path)}
          to={`/home/${path}`}
          isActive={secondPathComponent === path}
        />
      ))}
    </TabList>
  );
};

export default DesktopTabs;
