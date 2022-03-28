import React, { useState } from "react";
import ArrowDown from "./Icons/ArrowDown";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import AddTask from "./Icons/AddTask";
import ProjectsList from "./ProjectsList/ProjectsList";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";

export default function Projects() {
  const [projectsOnHover, setProjectsOnHover] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const Div = styled.div`
    display: flex;
    align-items: center;
    height: 1.5rem;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding-left: 0.5rem;

    cursor: pointer;
  `;

  // const Arrow = styled.div`
  //   transition: all 300ms;
  //   ${projectsExpanded ? "transform: rotate(-90deg)" : ""}
  // `;
  const Arrow = styled.div`
    transition: all 300ms;

    &:hover {
      transform: rotate(-90deg);
    }
  `;

  const H2 = styled.h2`
    font-size: ${Font.size1};
  `;
  const AddTaskSty = styled(AddTask)`
    justify-self: flex-end;
  `;

  const Button = styled.button`
    margin-left: auto;
    margin-right: 1rem;
    border: none;
    padding: 0.3rem;
    border-radius: ${BorderRadius.small};
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${Colors.gray200};
    }
  `;

  const Archived = styled.p`
    margin-top: 1rem;
    margin-left: 0.5rem;
    font-size: ${Font.size1};
    color: ${Colors.gray400};
  `;

  return (
    <>
      <Div
        onMouseEnter={() => setProjectsOnHover(true)}
        onMouseLeave={() => setProjectsOnHover(false)}
        onClick={() => setProjectsExpanded((e) => !e)}
      >
        <Arrow>
          <ArrowDown />
        </Arrow>
        <H2>Projects</H2>
        {projectsOnHover && (
          <Button>
            <AddTaskSty />
          </Button>
        )}
      </Div>
      {projectsExpanded && <ProjectsList />}
      <Archived>Archived Projects</Archived>
    </>
  );
}
