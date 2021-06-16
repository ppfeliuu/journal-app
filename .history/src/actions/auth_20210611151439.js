import { types } from "../types/types";
import { firebase } from "../firebase/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedroooo"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase;
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
