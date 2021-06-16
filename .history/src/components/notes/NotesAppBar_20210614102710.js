import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(saveNote(active));
  };

  const handleUploadPicture = () => {
    console.log("Picture");
  };
  return (
    <div className="notes__appbar">
      <span>28 de Junio de 2021</span>
      <div>
        <button className="btn" onClick={handleUploadPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
