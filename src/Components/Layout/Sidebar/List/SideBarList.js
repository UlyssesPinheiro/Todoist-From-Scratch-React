import React from "react";
import styled from "styled-components";
import Inbox from "./Icons/Inbox";
import Today from "./Icons/Today";
import Upcoming from "./Icons/Upcoming";
import { Font } from "../../../../helpers/Styles/Font";
import { ListItem } from "../../../../helpers/Styles/ListItem";

export default function SideBarList() {
  const Ul = styled.ul`
    padding-top: 2rem;
    list-style: none;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Ul>
      <ListItem>
        <span>
          <Inbox />
        </span>
        <span>Inbox</span>
      </ListItem>
      <ListItem>
        <span>
          <Today />
        </span>
        <span>Today</span>
      </ListItem>
      <ListItem>
        <span>
          <Upcoming />
        </span>
        <span>Next 7 days</span>
      </ListItem>
    </Ul>
  );
}
