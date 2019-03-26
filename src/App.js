import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import LandingPage from "./containers/landing-page/LandingPage.js";
import Dashboard from "./containers/dashboard/Dashboard.js";
import AdServer from "./containers/ad-server/AdServer.js";

<<<<<<< HEAD
import MainApp from "./containers/auth-zero/MainApp.js";
import Callback from "./containers/auth-zero/Callback/Callback.js";
import Auth from "./containers/auth-zero/Auth/Auth.js";
=======

import Auth from './containers/Auth-Zero/Auth/Auth';
import Callback from './containers/Auth-Zero/Callback/Callback';
import MainApp from './containers/Auth-Zero/MainApp';
>>>>>>> commented out console.error in Auth.js

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
          <Route
            exact
            path="/"
            render={props => <LandingPage auth={auth} {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => <MainApp auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ad/:affiliateId/:size" component={AdServer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
