import Content from "./Components/Layout/Content";
import Header from "./Components/Layout/Header/Header";
import classes from "./App.module.css";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export default function App() {
  return (
    <FlexDiv className={classes}>
      <Header />
      <Content />
    </FlexDiv>
  );
}
