import React from "react";
import { Font } from "../Styles/Font";
import { Colors } from "../Styles/Colors";
import styled from "styled-components";

export const SmallGrey = styled.p`
  font-size: ${Font.size0};
  color: ${Colors.gray400};
  user-select: none;
`;

export default function ParagraphSmallGrey({ children, className }) {
  return <SmallGrey className={className}>{children}</SmallGrey>;
}
