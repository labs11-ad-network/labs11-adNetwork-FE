import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import MainApp from './Main-App/index';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Profile from './Profile/Profile';


const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <div>
      <div>
        <Route path="/auth" render={props => <MainApp auth={auth} {...props} />} />
        <Route path="/auth/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/auth/profile"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/auth/home" />
              : <Profile auth={auth} {...props} />}
        />
        <Route
          path="/auth/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </div>
  );
};
