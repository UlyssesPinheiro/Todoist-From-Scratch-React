import React, { useContext, useState } from "react";
import Home from "./Icons/Home";
import Menu from "./Icons/Menu";
import SearchBar from "./SearchBar/SearchBar";
import { Ul } from "../UlNav";
import { useSidebar, useSidebarUpdate } from "../../../../context/MyContext";

export default function LeftHeader() {
  const toggleSidebar = useSidebarUpdate();

  return (
    <Ul>
      <Menu onClick={toggleSidebar} className="item" />
      <Home className="item" />
      <SearchBar className="bar" />
    </Ul>
  );
}
