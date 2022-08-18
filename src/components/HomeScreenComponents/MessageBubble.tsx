import { forwardRef } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';

interface MessageProps {
  text: string;
  date: string;
}

const MessageBase = styled.li`
  background: #fff;
  border-radius: 15px 15px 15px 5px;
  padding: 15px;
  margin-top: 15px;
  overflow: break-word;
  width: fit-content;

  &:first-child {
    margin-top: 0;
  }
`;

const MessageBubble = forwardRef<HTMLLIElement, MessageProps>((props, ref) => (
  <MessageBase ref={ref}>
    <Typography type="p">
      {props.text}
    </Typography>
    <div style={{ padding: '5px 0 0' }}>
      <Typography type="subtext" color="rgba(0,0,0,.5)">
        {new Date(props.date).toLocaleString()}
      </Typography>
    </div>
  </MessageBase>
));

export default MessageBubble;