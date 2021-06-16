import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <form>
          <input
            type="text"
            placeholder="Title"
            className="notes__title-input"
          />

          <textarea
            placeholder="Tell me..."
            className="notes__textarea"
          ></textarea>

          <div className="notes__image">
            <img
              src={
                "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
              }
              alt="AAA"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
