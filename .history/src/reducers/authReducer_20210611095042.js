import { types } from "../types/types";

/* 
    {
        uid: 1
        name: 'Pedro'
    }

*/

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    default:
      return state;
  }
};
