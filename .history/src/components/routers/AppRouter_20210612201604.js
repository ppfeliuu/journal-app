import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";

export const AppRouter = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
