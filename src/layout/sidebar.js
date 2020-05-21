import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar-generic">
        <li>
          <span>
            <FaInbox></FaInbox>
          </span>
          Inbox
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li>Next 7 days</li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
          <h2>Projects</h2>
        </span>
      </div>
      <ul className="sidebar__projects">Project here</ul>
    </div>
  );
};
