import React from "react";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import { Colors } from "../../../../helpers/Styles/Colors";
import ViewButton from "./ViewButton/ViewButton";
import ParagraphSmallGrey from "../../../../helpers/helperComponents/Paragraphs";

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

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;

  & h2 {
    font-size: ${Font.size3};
  }
`;

export default function Inbox() {
  const date = new Date();
  const formatedDate = date
    .toDateString()
    .substring(0, date.toDateString().length - 4);

  return (
    <MasterContainer>
      <Container>
        <TitleNav>
          <Title>
            <h2>Today</h2>
            <ParagraphSmallGrey>{formatedDate}</ParagraphSmallGrey>
          </Title>
          <ViewButton />
        </TitleNav>
        Inbox
      </Container>
    </MasterContainer>
  );
}
