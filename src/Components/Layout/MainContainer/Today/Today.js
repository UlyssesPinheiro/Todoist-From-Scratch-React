import React from "react";
import styled from "styled-components";
import ViewButton from "./ViewButton/ViewButton";
import ParagraphSmallGrey from "../../../../helpers/helperComponents/Paragraphs";
import { Title } from "../Helpers/Title";
import HeaderContainer from "../Helpers/HeaderContainer";

const DateParagraph = styled(ParagraphSmallGrey)`
  margin-bottom: 0.15rem;
`;

export default function Today() {
  const date = new Date();
  const formatedDate = date
    .toDateString()
    .substring(0, date.toDateString().length - 4);

  return (
    <HeaderContainer>
      <Title>
        <h2>Today</h2>
        <DateParagraph>{formatedDate}</DateParagraph>
      </Title>
      <ViewButton />
    </HeaderContainer>
  );
}
