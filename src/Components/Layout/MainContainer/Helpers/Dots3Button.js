import React from "react";
import { Colors } from "../../../../helpers/Styles/Colors";
import { Button } from "./ButtonHeader";
import { useState } from "react";

export default function Dots3() {
  const [hover, setHover] = useState(false);

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <g
          fill="none"
          stroke={`${hover ? Colors.gray600 : Colors.gray400}`}
          transform="translate(3 10)"
        >
          <circle cx="2" cy="2" r="2"></circle>
          <circle cx="9" cy="2" r="2"></circle>
          <circle cx="16" cy="2" r="2"></circle>
        </g>
      </svg>
    </Button>
  );
}
