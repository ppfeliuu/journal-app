import { db } from "../firebase/firebaseConfig";

export const startNewNote = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = db.collection(`${uid}/journal/notes`).add(newNote);
  };
};
