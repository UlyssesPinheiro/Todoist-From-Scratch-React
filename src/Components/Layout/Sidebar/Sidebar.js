import React from "react";
import SideBarList from "./List/SideBarList";
import Projects from "./Projects/Projects";
import styled from "styled-components";
import { Colors } from "../../../helpers/Styles/Colors";
import CssTestAnimation from "../../CssTestAnimation";

export default function Sidebar() {
  const Div = styled.div`
    width: 315px;
    padding-left: 35px;
    background-color: ${Colors.gray050};
    height: 100%;
  `;

  return (
    <Div>
      <div>
        <SideBarList />
        <Projects />
        <CssTestAnimation />
      </div>
    </Div>
  );
}
