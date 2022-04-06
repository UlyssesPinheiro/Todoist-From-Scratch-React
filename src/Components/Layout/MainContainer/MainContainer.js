import React from "react";
import styled from "styled-components";
import Today from "./Today/Today";
import Inbox from "./Inbox/Inbox";
import Upcoming from "./Upcoming/Upcoming";

import { useSelector } from "react-redux";
import Completed from "./Completed/Completed";

const Div = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default function MainContainer() {
  const currentTab = useSelector((state) => state.uiSlice.currentTab);

  let contentSelector;

  if (currentTab === "inbox") contentSelector = <Inbox />;
  if (currentTab === "today") contentSelector = <Today />;
  if (currentTab === "upcoming") contentSelector = <Upcoming />;
  if (currentTab === "completed") contentSelector = <Completed />;

  return <Div>{contentSelector}</Div>;
}
