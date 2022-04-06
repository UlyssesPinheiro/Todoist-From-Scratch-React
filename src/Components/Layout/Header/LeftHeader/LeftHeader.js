import React, { useContext, useState } from "react";
import Home from "./Icons/Home";
import Menu from "./Icons/Menu";
import SearchBar from "./SearchBar/SearchBar";
import { Ul } from "../UlNav";
import { useDispatch } from "react-redux";
import { uiSlice } from "../../../../Store/uiSlice";

export default function LeftHeader() {
  const dispatch = useDispatch();

  function toggleSideBarHandler() {
    dispatch(uiSlice.actions.toggleSideBar());
  }

  return (
    <Ul>
      <Menu onClick={toggleSideBarHandler} className="item" />
      <Home className="item" />
      <SearchBar className="bar" />
    </Ul>
  );
}
