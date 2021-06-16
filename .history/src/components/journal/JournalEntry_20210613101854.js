import React from "react";

export const JournalEntry = ({ id, date, title, body }) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Hi</p>
        <p className="journal__entry-content">
          Aute non sit laborum in officia Lorem ad do nisi.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
