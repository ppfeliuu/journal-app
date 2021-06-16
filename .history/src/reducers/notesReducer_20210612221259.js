/* {
    notes: [],
    active: null,
    active: {
        id: XXXX,
        title: '',
        body: '',
        imageUrl: '',
        date: 12312312312
    }
} */

import { types } from "../types/types";

const initialState = {
  notes: [],
  cative: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
