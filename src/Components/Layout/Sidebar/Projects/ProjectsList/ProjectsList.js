import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { Font } from "../../../../../helpers/Styles/Font";
import { Colors } from "../../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../../helpers/Styles/BorderRadius";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */

  transition-property: all;
  transition-duration: 300ms;

  &.hidden {
    opacity: 0;
  }
`;

const ProjectItemSty = styled(ProjectItem)`
  &:hover {
    background-color: ${Colors.gray200};
    border-radius: ${BorderRadius.small};
  }
`;
export default function ProjectsList(props) {
  return (
    <Ul>
      <ProjectItemSty />
      <ProjectItemSty />
      <ProjectItemSty />
      <ProjectItemSty />
    </Ul>
  );
}
