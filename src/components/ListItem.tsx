import { styleConfig } from "config";
import { FC, ReactElement } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "./Typography";

const ListItemBase = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: 100ms ease-out;
`;

const ListText = styled(Typography)`
  flex-grow: 1;
`;

const ListItem: FC<{
  text: string,
  textVariant?: TypographyProps['type'],
  action?: ReactElement
}> = ({ text, action, textVariant }) => (
  <ListItemBase>
    <Typography type={textVariant || 'outstand-p'}>
      {text}
    </Typography>
    {action}
  </ListItemBase>
)

export default ListItem;