import { types } from "../types/types";

export const setError2 = ({ err }) => {
  console.log(err);
};

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});
