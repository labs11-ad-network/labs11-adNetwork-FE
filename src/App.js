import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './containers/dashboard/Dashboard.js';
import Login from './containers/login/Login.js';
import Register from './containers/register/Register.js';
import AdServer from './containers/ad-server/AdServer.js'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0A88DC',
    },
    secondary: {
      main: '#F1F1F1',
    },
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ad/:id" component={AdServer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
