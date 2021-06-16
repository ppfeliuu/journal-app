import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveNote, uploadFile } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(saveNote(active));
  };

  const handleUploadPicture = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de Junio de 2021</span>

      <input
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
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
