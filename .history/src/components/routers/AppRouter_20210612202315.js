import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setchecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }

      setchecking(false);
    });
  }, [dispatch, setchecking]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

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
