import React, { useState } from "react";
import View from "./Icons/View";
import ParagraphSmallGrey from "../../../../../helpers/helperComponents/Paragraphs";
import styled from "styled-components";
import { BorderRadius } from "../../../../../helpers/Styles/BorderRadius";
import { Colors } from "../../../../../helpers/Styles/Colors";

const ParagraphView = styled(ParagraphSmallGrey)`
  &.hover {
    color: ${Colors.gray600};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: transparent;
  border: none;
  border-radius: ${BorderRadius.smaller};
  padding: 0.1rem;

  &:hover {
    background-color: ${Colors.gray200};
  }
`;

export default function ViewButton() {
  const [hover, setHover] = useState(false);

  let color;

  if (hover) {
    color = Colors.gray600;
  } else {
    color = Colors.gray400;
  }
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <View fill={color} />
      <ParagraphView className={hover ? "hover" : ""}>View</ParagraphView>
    </Button>
  );
}
