import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.ui);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal_sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Pedro</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
