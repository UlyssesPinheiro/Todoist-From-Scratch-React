import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../helpers/Styles/Colors";
import { Font } from "../../../../../helpers/Styles/Font";
import IconAddTask from "./IconAddTask";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.3rem;
`;

const P = styled.p`
  font-size: ${Font.size1};
  color: ${Colors.gray500};
`;

export default function MainAddTask() {
  const [hover, setHover] = useState();

  return (
    <Div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconAddTask />
      <P>Add Task</P>
    </Div>
  );
}
