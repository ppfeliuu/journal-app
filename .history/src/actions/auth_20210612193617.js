import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedroooo"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
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

export const startRegisterWith = (email, password, name) => {
  return {
    type: types.login,
    payload: {
      email,
      password,
      name,
    },
  };
};
