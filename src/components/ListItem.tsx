import { FC, ReactElement } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "./Typography";

const ListItemBase = styled.li`
  padding: 12px 0;
  /* height: 24px; */
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
  action?: ReactElement,
  as?: ReturnType<typeof ListItemBase>['props']['as']
}> = ({ text, action, textVariant, as }) => (
  <ListItemBase as={as}>
    <Typography type={textVariant || 'text-md'} fontWeight={500}>
      {text}
    </Typography>
    {action}
  </ListItemBase>
)

export default ListItem;