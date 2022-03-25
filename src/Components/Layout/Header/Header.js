import React from "react";
import LeftHeader from "./LeftHeader/LeftHeader";
import classes from "./Header.module.css";
import RightHeader from "./RightHeader/RightHeader";
import styled from "styled-components";

export default function Header() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 38px;
  `;

  return (
    <header className={classes.container}>
      <Nav>
        <LeftHeader />
        <RightHeader />
      </Nav>
    </header>
  );
}
