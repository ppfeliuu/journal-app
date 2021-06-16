import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { notes } = useSelector();

  return (
    <div className="journal__entries">
      {notes.map((value) => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};
