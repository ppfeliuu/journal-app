import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
      </Switch>
    </div>
  );
};
