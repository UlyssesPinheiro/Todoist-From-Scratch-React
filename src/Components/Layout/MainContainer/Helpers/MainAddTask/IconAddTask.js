import React from "react";
import { Colors } from "../../../../../helpers/Styles/Colors";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 100px;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export default function IconAddTask() {
  return (
    <Div>
      <svg width="13" height="13" transform="translate(0 2)">
        <path
          d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
          fill={Colors.primary}
        ></path>
      </svg>
    </Div>
  );
}
