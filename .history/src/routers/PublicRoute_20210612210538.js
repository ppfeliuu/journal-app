import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
    ></Route>
  );
};

PublicRoute.protoTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
