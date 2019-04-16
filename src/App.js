import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AdServer from "./containers/ad-server/AdServer.js";
import StripeCallback from "./containers/stripe-callback/StripeCallback.js";
import Callback from "./containers/auth-zero/Callback/Callback.js";
import Auth from "./containers/auth-zero/Auth/Auth.js";
import NotFound from "./components/landing-page/NotFound";

const LazyLandingPage = React.lazy(() =>
  import("./containers/landing-page/LandingPage.js")
);

const Dashboard = React.lazy(() =>
  import("./containers/dashboard/Dashboard.js")
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0A88DC"
    },
    secondary: {
      main: "#F1F1F1"
    }
  },
  typography: { useNextVariants: true }
});

const auth = new Auth();
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Suspense fallback={<Callback />}>
                  <LazyLandingPage auth={auth} {...props} />
                </Suspense>
              )}
            />

            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />

            <Route
              path="/dashboard"
              render={props => (
                <Suspense fallback={<Callback />}>
                  <Dashboard {...props} auth={auth} />
                </Suspense>
              )}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/ad/:affiliateId/:size" component={AdServer} />
            <Route path="/stripe-callback" component={StripeCallback} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
