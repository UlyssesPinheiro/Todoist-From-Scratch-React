import React from "react";
import { Colors } from "../../../../../helpers/Styles/Colors";
import styled from "styled-components";

export default function AddTask({ className }) {
  const Li = styled.li`
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 0.2rem;
  `;

  return (
    <Li className={className}>
      <svg width="24" height="24" transform="translate(3 5)">
        <path
          fill={Colors.outline}
          d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
        ></path>
      </svg>
    </Li>
  );
}
