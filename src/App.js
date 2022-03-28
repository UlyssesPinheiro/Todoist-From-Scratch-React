import Content from "./Components/Layout/Content";
import Header from "./Components/Layout/Header/Header";
import classes from "./App.module.css";
import styled from "styled-components";

export default function App() {
  const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  return (
    <FlexDiv className={classes}>
      <Header />
      <Content />
    </FlexDiv>
  );
}
