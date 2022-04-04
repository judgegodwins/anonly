import GlobalStyle from "./GlobalStyle";
import Router from "./routes";
import Alert from "components/Alert";
import { ShareDialog } from "components/ShareDialog";
import ShareDialogProvider from "components/providers/ShareDialogProvider";
import NotificationProvider from "components/providers/NotificationProvider";
// import EmailVerificationRoute from 'components/customroutes/EmailVerificationRoute';

export default function App() {
  return (
    <NotificationProvider>
      <ShareDialogProvider>
        <GlobalStyle />
        <Alert />
        <ShareDialog />

        <Router />

        {/* <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <EmailVerificationRoute path="/set-email" component={SetEmail} exact />
          <Route path="/m/:username" component={SendMessage} exact/>
        </Switch>
      </Router> */}
      </ShareDialogProvider>
    </NotificationProvider>
  );
}
