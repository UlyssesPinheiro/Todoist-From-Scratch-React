import React, { useState } from "react";
import { Colors } from "../../../../../helpers/Styles/Colors";
import styled from "styled-components";
import { Font } from "../../../../../helpers/Styles/Font";
import Search from "./Icons/Search";

const Li = styled.li`
  background-color: ${Colors.primaryHover};
  color: ${Colors.outline};
  font-size: ${Font.size1};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;

  :hover {
    background-color: ${Colors.outline};
  }
`;

const StyledSearch = styled(Search)`
  fill: ${Colors.outline};

  &:hover {
    fill: ${Colors.outlineBlack};
  }
`;

export default function SearchBar({ className }) {
  const [hover, setHover] = useState(false);

  function mouseHoverHandler() {
    setHover(true);
  }
  function mouseLeaveHandler() {
    setHover(false);
  }

  return (
    <Li
      className={`${className}`}
      onMouseEnter={mouseHoverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <StyledSearch color={hover ? Colors.outlineBlack : Colors.outline} />
      <p style={{ color: `${hover ? Colors.gray500 : Colors.outline}` }}>
        Search
      </p>
    </Li>
  );
}
