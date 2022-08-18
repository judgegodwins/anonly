import { usePagination } from "hooks/apiHooks";
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
      {data.map((message, index) => (
        <MessageBubble
          ref={index === data.length - 1 ? lastElementRef : undefined}
          key={message._id}
          text={message.text}
          date={message.createdAt}
        />
      ))}
      {loading && <InfiniteScrollSpinner />}
      {!hasMore && data.length > 0 && (
        <FlexCentered>
          <Typography type="outstand-p" component="p">
            You've reached the end
          </Typography>
        </FlexCentered>
      )}
      {(!data || data.length < 0) && (
        <FlexCentered>
          <Typography type="outstand-p" component="p">
            You don't have any message yet.
          </Typography>
        </FlexCentered>
      )}
    </MessagesListContainer>
  );
};

export default MessageList;
