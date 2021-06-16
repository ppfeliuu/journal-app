import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return () => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 3500);
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
