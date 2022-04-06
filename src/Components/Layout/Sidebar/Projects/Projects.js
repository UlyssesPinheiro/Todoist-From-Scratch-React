import React, { useState } from "react";
import ArrowDown from "./Icons/ArrowDown";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import AddTask from "./Icons/AddTask";
import ProjectsList from "./ProjectsList/ProjectsList";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-left: 0.5rem;
`;
const ProjDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;
`;

const H2 = styled.h2`
  font-size: ${Font.size1};
  user-select: none;
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

const Arrow = styled.div`
  &.rotate {
    transform: rotate(-90deg);
  }
`;

export default function Projects() {
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  return (
    <>
      <Div>
        <ProjDiv onClick={() => setProjectsExpanded((e) => !e)}>
          <Arrow className={`${projectsExpanded ? `` : `rotate`}`}>
            <ArrowDown />
          </Arrow>

          <H2>Projects</H2>
        </ProjDiv>

        <Button>
          <AddTaskSty />
        </Button>
      </Div>

      {projectsExpanded && <ProjectsList />}
    </>
  );
}
