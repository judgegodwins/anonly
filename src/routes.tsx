import { useEffect } from "react";
import { Navigate, useRoutes, useNavigate } from "react-router-dom";

import { useAppSelector } from "hooks/reduxHooks";
import Home from "screens/Home";
import Login from "screens/Login";
import Signup from "screens/Signup";
import SendMessage from "screens/SendMessage";
import SetEmail from "screens/SetEmail";
import VerifyEmail from "screens/VerifyEmail";

export default function Router() {
  const loggedIn = useAppSelector(({ auth }) => auth.loggedIn);

  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/messages" /> },
        {
          path: "login",
          element: !loggedIn ? <Login /> : <Navigate to="/" replace />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "messages",
          element: loggedIn ? <Home /> : <Navigate to="/login" replace />,
        },
        {
          path: "m/:username",
          element: <SendMessage />
        },
        {
          path: "set-email",
          element: <SetEmail />
        },
        {
          path: "verify",
          element: <VerifyEmail />
        }
      ],
    },
  ]);
}
