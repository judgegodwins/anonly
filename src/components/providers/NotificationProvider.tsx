import { FC } from "react";
import { useProvideNotification } from "contexts/notificationContext";
import { notificationContext } from "contexts/notificationContext";

const NotificationProvider: FC<{}> = ({ children }) => {
  const notification = useProvideNotification();

  return (
    <notificationContext.Provider value={notification}>
      {children}
    </notificationContext.Provider>
  );
}

export default NotificationProvider;
