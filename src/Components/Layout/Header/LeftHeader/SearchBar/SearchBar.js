import React from "react";
import { Colors } from "../../../../../helpers/Styles/Colors";
import styled from "styled-components";

const Li = styled.li`
  background-color: ${Colors.primaryHover};
  color: ${Colors.outline};
`;

export default function SearchBar({ className }) {
  return <Li className={`${className} `}>SearchBar</Li>;
}
