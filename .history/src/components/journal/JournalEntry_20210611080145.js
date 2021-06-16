import React from "react";

export const JournalEntry = ({ value }) => {
  return (
    <div className="journal__entry">
      <div
        className="journal_entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg)",
        }}
      ></div>
    </div>
  );
};
