import React, { useState } from "react";
import View from "./Icons/View";
import ParagraphSmallGrey from "../../../../../helpers/helperComponents/Paragraphs";
import styled from "styled-components";
import { Colors } from "../../../../../helpers/Styles/Colors";
import { Button } from "../../Helpers/ButtonHeader";

const ParagraphView = styled(ParagraphSmallGrey)`
  &.hover {
    color: ${Colors.gray600};
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
