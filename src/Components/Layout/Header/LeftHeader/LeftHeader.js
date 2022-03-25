import React from "react";
import Home from "./Icons/Home";
import Menu from "./Icons/Menu";
import SearchBar from "./SearchBar/SearchBar";
import { Ul } from "../UlNav";

export default function LeftHeader() {
  return (
    <Ul>
      <Menu className="item" />
      <Home className="item" />
      <SearchBar className="bar" />
    </Ul>
  );
}
