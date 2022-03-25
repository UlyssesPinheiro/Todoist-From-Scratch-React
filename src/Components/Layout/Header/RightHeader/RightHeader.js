import React from "react";
import AddTask from "./Icons/AddTask";
import { Ul } from "../UlNav";
import Productivity from "./Icons/Productivity";

export default function RightHeader() {
  return (
    <Ul>
      <AddTask className="item" />
      <Productivity className="item" />
    </Ul>
  );
}
