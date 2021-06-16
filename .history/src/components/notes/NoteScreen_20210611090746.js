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
            className="notes_title-input"
          />

          <textarea
            placeholder="Tell me..."
            className="notes__textarea"
          ></textarea>
        </form>
      </div>
    </div>
  );
};
