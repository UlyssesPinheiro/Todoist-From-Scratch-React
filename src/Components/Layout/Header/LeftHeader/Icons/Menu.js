import React from "react";
import { Colors } from "../../../../../helpers/Styles/Colors";
import styled from "styled-components";

export default function Menu({ className }) {
  return (
    <li className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        transform="translate(0 2)"
      >
        <path
          fill={Colors.outline}
          fill-rule="evenodd"
          d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
        ></path>
      </svg>
    </li>
  );
}
