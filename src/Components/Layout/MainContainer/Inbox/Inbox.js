import React from "react";
import styled from "styled-components";
import ViewButton from "../Today/ViewButton/ViewButton";
import Dots3Button from "../Helpers/Dots3Button";
import { Title } from "../Helpers/Title";
import MainAddTask from "../Helpers/MainAddTask/MainAddTask";
import HeaderContainer from "../Helpers/HeaderContainer";

const DivRight = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Inbox() {
  return (
    <HeaderContainer>
      <Title>
        <h2>Inbox</h2>
      </Title>
      <DivRight>
        <ViewButton />
        <Dots3Button />
      </DivRight>

      <MainAddTask />
    </HeaderContainer>
  );
}
