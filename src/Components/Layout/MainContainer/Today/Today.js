import React from "react";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import { Colors } from "../../../../helpers/Styles/Colors";
import ViewButton from "./ViewButton/ViewButton";
import ParagraphSmallGrey from "../../../../helpers/helperComponents/Paragraphs";
import { headerItems } from "../Helpers/HeaderItems";
import MainAddTask from "../Helpers/MainAddTask/MainAddTask";

const DateParagraph = styled(ParagraphSmallGrey)`
  margin-bottom: 0.15rem;
`;

export default function Today() {
  const date = new Date();
  const formatedDate = date
    .toDateString()
    .substring(0, date.toDateString().length - 4);

  return (
    <headerItems.MasterContainer>
      <headerItems.Container>
        <headerItems.TitleNav>
          <headerItems.Title>
            <h2>Today</h2>
            <DateParagraph>{formatedDate}</DateParagraph>
          </headerItems.Title>
          <ViewButton />
        </headerItems.TitleNav>
        <MainAddTask />
      </headerItems.Container>
    </headerItems.MasterContainer>
  );
}
