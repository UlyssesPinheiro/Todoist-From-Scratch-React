import React from "react";
import styled from "styled-components";
import Inbox from "./Icons/Inbox";
import Today from "./Icons/Today";
import Upcoming from "./Icons/Upcoming";
import { Font } from "../../../../helpers/Styles/Font";
import { ListItem } from "../../../../helpers/Styles/ListItem";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";

export default function SideBarList() {
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

  return (
    <Ul>
      <ListItem className="hoverClass">
        <span>
          <Inbox />
        </span>
        <Span>Inbox</Span>
      </ListItem>
      <ListItem className="hoverClass">
        <span>
          <Today />
        </span>
        <Span>Today</Span>
      </ListItem>
      <ListItem className="hoverClass">
        <span>
          <Upcoming />
        </span>
        <Span>Next 7 days</Span>
      </ListItem>
    </Ul>
  );
}
