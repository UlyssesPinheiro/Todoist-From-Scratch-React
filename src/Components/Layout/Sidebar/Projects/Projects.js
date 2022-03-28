import React, { useState } from "react";
import ArrowDown from "./Icons/ArrowDown";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import AddTask from "./Icons/AddTask";
import ProjectsList from "./ProjectsList/ProjectsList";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";
import { CSSTransition } from "react-transition-group";

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

  const Arrow = styled.div`
    transition: all 300ms;

    & .rotate {
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

  const ProjectsListStyled = styled(ProjectsList)`
    transition: all 0.3s;

    // enter from
    &.fade-enter {
      opacity: 0;
    }

    // enter to
    &.fade-enter-active {
      opacity: 1;
    }

    // exit from
    &.fade-exit {
      opacity: 1;
    }

    // exit to
    &.fade-exit-active {
      opacity: 0;
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
        <Arrow className={`${projectsExpanded ? "rotate" : ""}`}>
          <ArrowDown />
        </Arrow>
        <H2>Projects</H2>

        <CSSTransition in={projectsOnHover} unmountOnExit timeout={300}>
          <Button>
            <AddTaskSty />
          </Button>
        </CSSTransition>
        {/* {projectsOnHover && (

        )} */}
      </Div>
      <CSSTransition
        in={projectsExpanded}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        {() => <ProjectsListStyled />}
      </CSSTransition>
      {/* {projectsExpanded && <ProjectsList />} */}
      <Archived>Archived Projects</Archived>
    </>
  );
}
