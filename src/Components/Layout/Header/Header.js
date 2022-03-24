import React from "react";
import LeftHeader from "./LeftHeader/LeftHeader";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.container}>
      <nav>
        <LeftHeader></LeftHeader>
      </nav>
    </header>
  );
}
