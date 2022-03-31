import React, { useState, useContext } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import { useSidebar } from "../../context/MyContext";
import MainContainer from "./MainContainer/MainContainer";

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-grow: 1;
`;
export default function Content() {
  const sidebar = useSidebar();

  return (
    <Section>
      {sidebar && <Sidebar></Sidebar>}
      <MainContainer />
    </Section>
  );
}
