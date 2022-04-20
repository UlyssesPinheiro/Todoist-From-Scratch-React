import React from "react";
import styled from "styled-components";
import Inbox from "./Icons/Inbox";
import Today from "./Icons/Today";
import Upcoming from "./Icons/Upcoming";
import { ListItem } from "../../../../helpers/Styles/ListItem";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";
import { useDispatch } from "react-redux";
import { uiSlice } from "../../../../Store/uiSlice";
import Done from "./Icons/Done";

const Ul = styled.ul`
  padding-top: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;

  & .hoverClass:hover {
    background-color: ${Colors.gray200};
    border-radius: ${BorderRadius.small};
  }
`;

const Span = styled.span`
  user-select: none;
  margin-bottom: 0.2rem;
`;

export default function SideBarList() {
  const dispatch = useDispatch();

  function changeTab(tab) {
    dispatch(uiSlice.actions.switchCurrentTab(tab));
  }

  return (
    <Ul>
      <ListItem
        className="hoverClass"
        onClick={() => {
          changeTab("inbox");
        }}
      >
        <span>
          <Inbox />
        </span>
        <Span>Inbox</Span>
      </ListItem>
      <ListItem
        className="hoverClass"
        onClick={() => {
          changeTab("today");
        }}
      >
        <span>
          <Today />
        </span>
        <Span>Today</Span>
      </ListItem>
      <ListItem
        className="hoverClass"
        onClick={() => {
          changeTab("upcoming");
        }}
      >
        <span>
          <Upcoming />
        </span>
        <Span>Upcoming</Span>
      </ListItem>
      <ListItem
        className="hoverClass"
        onClick={() => {
          changeTab("completed");
        }}
      >
        <span>
          <Done />
        </span>
        <Span>Completed</Span>
      </ListItem>
    </Ul>
  );
}
