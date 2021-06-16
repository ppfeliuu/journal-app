import React from "react";

export const JournalEntry = ({ id, date, title, body, url }) => {
  return (
    <div className="journal__entry pointer">
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

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
