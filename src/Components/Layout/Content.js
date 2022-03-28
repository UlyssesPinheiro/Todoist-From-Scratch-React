import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";

export default function Content() {
  const Section = styled.section`
    height: 100%;

    flex-grow: 1;
  `;

  return (
    <Section>
      <Sidebar></Sidebar>
    </Section>
  );
}
