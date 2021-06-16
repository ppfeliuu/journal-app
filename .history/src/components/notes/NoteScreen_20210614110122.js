import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeNote, deleteNoteFromFirestore } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(deleteNoteFromFirestore(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Title"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <textarea
          placeholder="Tell me..."
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt={note.title} />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
