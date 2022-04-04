import { createContext, FC, useContext } from "react";
import PropTypes from "prop-types";
import { serializeError } from "serialize-error";

import { pushNotification, NotificationItem } from "slices/notification";
import { pushError } from "slices/error";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";

export const useProvideNotification = () => {
  const dispatch = useAppDispatch();

  const notify = (payload: Error | string, type?: NotificationItem["type"]) => {
    if (payload instanceof Error) {
      dispatch(pushNotification({ message: payload.message, type: "error" }));
      dispatch(pushError(serializeError(payload)));
    } else if (typeof payload === "string") {
      dispatch(pushNotification({ message: payload, type: type || "success" }));
    }
  };

  const latestNotification = useAppSelector(({ notifications }) => {
    if (notifications.length <= 0) return null;
    return notifications[notifications.length - 1];
  });

  const allNotifications = useAppSelector(({ notifications }) => notifications);

  return { notify, latestNotification, allNotifications };
};

export const notificationContext = createContext<{
  notify: (payload: Error | string, type?: NotificationItem["type"]) => void;
  latestNotification: NotificationItem | null;
  allNotifications: NotificationItem[];
}>({
  notify: (payload: Error | string, type?: NotificationItem["type"]) => {},
  latestNotification: null,
  allNotifications: [] as NotificationItem[],
});

export const useNotification = () => useContext(notificationContext);
