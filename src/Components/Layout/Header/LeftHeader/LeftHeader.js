import React, { useState } from "react";
import Home from "./Icons/Home";
import Menu from "./Icons/Menu";
import SearchBar from "./SearchBar/SearchBar";
import { Ul } from "../UlNav";

export default function LeftHeader() {
  const [sidebar, setsidebar] = useState(false);

  return (
    <Ul>
      <Menu
        onClick={() => {
          console.log(sidebar);
          return setsidebar((e) => !e);
        }}
        className="item"
      />
      <Home className="item" />
      <SearchBar className="bar" />
    </Ul>
  );
}
