import React from "react";
import SideBarList from "./List/SideBarList";
import Projects from "./Projects/Projects";
import styled from "styled-components";
import { Colors } from "../../../helpers/Styles/Colors";

const Div = styled.div`
  width: 315px;
  padding-left: 35px;
  background-color: ${Colors.gray050};
  height: 100%;
`;
export default function Sidebar() {
  return (
    <Div>
      <SideBarList />
      <Projects />
    </Div>
  );
}
