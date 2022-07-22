import { FC } from "react";
import List from "./List";
import ListItem from "./ListItem";
import ForwardArrow from "svg/ForwardArrow.svg";
import Plus from "svg/Plus.svg";
import FlexCentered from "./FlexCentered";
import Toggle from "./Toggle";
import Typography from "./Typography";

const Settings: FC<{}> = () => (
  <>
    <List>
      <ListItem text="Edit profile" action={<ForwardArrow />} />
      <ListItem text="Change password" action={<ForwardArrow />} />
      <ListItem text="Customize theme" action={<ForwardArrow />} />
      <ListItem text="Edit email address" action={<Plus />} />
      <ListItem text="Push notifications" action={<Toggle />} />
    </List>
  </>
);

export default Settings;
