import React from "react";
import Home from "./Icons/Home";
import Menu from "./Icons/Menu";
import classes from "./LeftHeader.module.css";
import SearchBar from "./SearchBar/SearchBar";

export default function LeftHeader() {
  return (
    <ul className={classes.list}>
      <Menu className={classes.item} />
      <Home className={classes.item} />
      <SearchBar className={classes.bar} />
    </ul>
  );
}
