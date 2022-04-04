import usePagination from "hooks/usePagination";
import { FC, useCallback, useRef, useState } from "react";
import MessageService from "services/MessageService";
import { Message } from "types/message";
import FlexCentered from "./FlexCentered";
import MessageBubble from "./HomeScreenComponents/MessageBubble";
import MessagesListContainer from "./HomeScreenComponents/MessagesListContainer";
import InfiniteScrollSpinner from "./InfiniteScrollSpinner";
import Typography from "./Typography";

const MessageList: FC<{}> = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, loading, error, hasMore } = usePagination<Message>(
    MessageService.getMessages,
    page,
    limit
  );

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node) => {
      console.log("iN REF");
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) setPage((prev) => prev + 1);
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <MessagesListContainer>
      {data.map((message, index) => {
        if (index === data.length - 1) {
          return (
            <MessageBubble
              ref={lastElementRef}
              key={message._id}
              text={message.text}
            />
          );
        } else {
          return <MessageBubble key={message._id} text={message.text} />;
        }
      })}
      {loading && <InfiniteScrollSpinner />}
      {!hasMore && (
        <FlexCentered>
          <Typography type="outstand-p" component="p">
            You've reached the end
          </Typography>
        </FlexCentered>
      )}
    </MessagesListContainer>
  );
};

export default MessageList;
