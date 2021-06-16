import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange] = useForm(note);

  const { body, title } = formValues;

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Tell me..."
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        <div className="notes__image">
          <img
            src={
              "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
            }
            alt="AAA"
          />
        </div>
      </div>
    </div>
  );
};
