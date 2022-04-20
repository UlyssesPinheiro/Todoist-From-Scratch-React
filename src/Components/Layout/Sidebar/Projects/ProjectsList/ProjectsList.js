import React from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { Font } from "../../../../../helpers/Styles/Font";
import { Colors } from "../../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../../helpers/Styles/BorderRadius";

const Archived = styled.p`
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: ${Font.size1};
  color: ${Colors.gray400};
  user-select: none;
`;

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
      <Archived>Archived Projects</Archived>
    </Ul>
  );
}
