import React from "react";
import LeftHeader from "./LeftHeader/LeftHeader";
import RightHeader from "./RightHeader/RightHeader";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 38px;
`;

const Container = styled.header`
  background-color: #db4c3f;
  padding: 0.5rem;
`;

export default function Header() {
  return (
    <Container>
      <Nav>
        <LeftHeader />
        <RightHeader />
      </Nav>
    </Container>
  );
}
