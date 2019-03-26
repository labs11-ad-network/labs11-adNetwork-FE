import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use(
  function (options) {
    options.headers.authorization = `Bearer ${localStorage.getItem("id_token")}`;
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const privateRoute = Component => {
  return class Authenticated extends Component {
    render() {
      const token = `Bearer ${localStorage.getItem("id_token")}`;
      return (
        <>
          {token ? (
            <Component {...this.props} />
          ) : (
              <Redirect to={{ pathname: "/" }} />
            )}
        </>
      );
    }
  };
};

export default privateRoute;
