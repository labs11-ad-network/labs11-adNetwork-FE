import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem("jwt");
    return options;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const privateRoute = Component => {
  return class Authenticated extends Component {
    render() {
      const token = localStorage.getItem("jwt");
      return (
        <>
          {token ? (
            <Component {...this.props} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </>
      );
    }
  };
};

export default privateRoute;
