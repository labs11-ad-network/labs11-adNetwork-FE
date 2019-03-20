import React, { Component } from 'react';
import { Route } from "react-router-dom"

import Dashboard from './containers/dashboard/Dashboard';
import Login from './containers/login/Login';
import Register from './containers/register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
