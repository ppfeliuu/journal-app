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

      <div className="journal__entry-body">
        <p className="journal__entry-title">Hi</p>
        <p className="journal__entryu-content">
          Ut et incididunt labore elit esse reprehenderit aute amet irure Lorem
          voluptate veniam anim ea. Sit sit do dolor nisi quis et magna minim
          qui sint anim cillum irure nostrud. Sunt ea excepteur veniam anim ex
          nisi magna. Qui nisi aliqua et proident est nostrud. Esse laborum
          officia qui velit quis. Labore do fugiat tempor adipisicing ad labore.
          Dolore mollit do est eu deserunt exercitation mollit.
        </p>
      </div>
    </div>
  );
};
