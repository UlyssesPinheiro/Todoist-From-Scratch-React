import Content from "./Components/Layout/Content";
import Header from "./Components/Layout/Header/Header";
import classes from "./App.module.css";
import styled from "styled-components";
import { SidebarProvider } from "./context/MyContext";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export default function App() {
  return (
    <SidebarProvider>
      <FlexDiv className={classes}>
        <Header />
        <Content />
      </FlexDiv>
    </SidebarProvider>
  );
}
