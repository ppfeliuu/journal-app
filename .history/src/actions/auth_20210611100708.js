import { types } from "sass";

export const login = (uid, displayName) => {
  return {
    type: types.login,
  };
};
