import React, { Component } from 'react';
import { Route } from "react-router-dom"

import Dashboard from './containers/dashboard/Dashboard.js';
import Login from './containers/login/Login.js';
import Register from './containers/register/Register.js';
import AdServer from './containers/ad-server/AdServer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/ad/:id" component={AdServer} />
      </div>
    );
  }
}

export default App;
