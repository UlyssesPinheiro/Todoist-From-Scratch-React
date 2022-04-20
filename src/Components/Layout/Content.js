import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import MainContainer from "./MainContainer/MainContainer";
import { useSelector } from "react-redux";

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-grow: 1;
`;
export default function Content() {
  const uiSlice = useSelector((state) => state.uiSlice);

  return (
    <Section>
      {uiSlice.sideBar && <Sidebar></Sidebar>}
      <MainContainer />
    </Section>
  );
}
