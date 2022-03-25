import React from "react";
import { Icon } from "../../../../../../helpers/Styles/Icon";
import styled from "styled-components";

export default function Search({ color }) {
  // const Path = styled.path`
  //   fill: ${color};

  //   this:hover {
  //     fill: ${color};
  //   }
  // `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={Icon.width2}
      height={Icon.width2}
      aria-hidden="true"
      class="search_icon"
      fill={color}
    >
      <path d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"></path>
    </svg>
  );
}
