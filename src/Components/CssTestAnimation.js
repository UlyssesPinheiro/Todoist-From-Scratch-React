import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const appearDuration = 2000;
const transitionName = `example`;

const Container = styled.section`
  font-size: 1.5em;
  padding: 0;
  margin: 0;

  &.${transitionName}-appear {
    opacity: 0.01;
  }

  &.${transitionName}-appear-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }
`;

export default function CssTestAnimation() {
  return (
    <CSSTransition
      transitionName={transitionName}
      transitionAppear={true}
      transitionAppearTimeout={appearDuration}
    >
      <Container>This will have the appear transition applied!</Container>
    </CSSTransition>
  );
}
