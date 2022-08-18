import { useEffect } from "react";
import { Navigate, useRoutes, useNavigate } from "react-router-dom";

import { useAppSelector } from "hooks/reduxHooks";
import Home from "screens/Home";
import Login from "screens/Login";
import Signup from "screens/Signup";
import SendMessage from "screens/SendMessage";
import SetEmail from "screens/SetEmail";
import VerifyEmail from "screens/VerifyEmail";
import MessageList from "components/Messages";
import Settings from "screens/Settings";
import EditProfile from "components/EditProfile";
import ChangePassword from "components/ChangePassword";
import CustomizeTheme from "components/CustomizeTheme";

export default function Router() {
  const loggedIn = useAppSelector(({ auth }) => auth.loggedIn);

  return useRoutes([
    {
      path: "/home",
      element: loggedIn ? <Home /> : <Navigate to="/login" replace />,
      children: [
        { path: "", element: <Navigate to="/home/messages" replace /> },
        { path: "messages", element: <MessageList /> },
        {
          path: "settings",
          element: <Settings />,
          children: [
            { path: "profile", element: <EditProfile /> },
            { path: "auth", element: <ChangePassword /> },
            { path: "theme", element: <CustomizeTheme /> },
          ],
        },
      ],
    },
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        {
          path: "login",
          element: !loggedIn ? <Login /> : <Navigate to="/" replace />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "m/:username",
          element: <SendMessage />,
        },
        {
          path: "set-email",
          element: <SetEmail />,
        },
        {
          path: "verify",
          element: <VerifyEmail />,
        },
      ],
    },
  ]);
}
