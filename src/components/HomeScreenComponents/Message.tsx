import { FC } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';
import { styleConfig } from 'config';


interface MessageProps {
  text: string;
}

const MessageBase = styled.li`
  background: #fff;
  border-radius: 15px 15px 15px 5px;
  padding: 15px;
  margin-top: 15px;
  overflow: break-word;

  &:first-child {
    margin-top: 0;
  }
`;

const Message: FC<MessageProps> = (props) => (
  <MessageBase>
    <Typography type="p">
      {props.text}
    </Typography>
  </MessageBase>
)

export default Message;