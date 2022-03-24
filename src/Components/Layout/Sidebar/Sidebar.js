import React from "react";
import classes from "./Sidebar.module.css";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.generic}>
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className={classes.middle}>
        <FaChevronDown />
        <h2>Projects</h2>
      </div>
      <ul className={classes.projects}>Projects will be here!</ul>
      Add Project Component here!!
    </div>
  );
}
