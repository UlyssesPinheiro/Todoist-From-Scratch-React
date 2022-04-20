import React from "react";
import MainAddTask from "./MainAddTask/MainAddTask";
import styled from "styled-components";

export default function HeaderContainer({ children }) {
  return (
    <MasterContainer>
      <Container>
        <TitleNav>{children}</TitleNav>
        <MainAddTask />
      </Container>
    </MasterContainer>
  );
}

const MasterContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 4rem;
  max-width: 1000px;
`;

const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
