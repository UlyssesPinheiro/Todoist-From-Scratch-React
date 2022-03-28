import React from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { Font } from "../../../../../helpers/Styles/Font";

export default function ProjectsList() {
  const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    /* gap: 0.2rem; */
  `;

  return (
    <Ul>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Ul>
  );
}
