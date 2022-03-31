import React from "react";
import styled from "styled-components";
import Inbox from "./Inbox/Inbox";
import Today from "./Today/Today";
import Upcoming from "./Upcoming/Upcoming";

const Div = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default function MainContainer() {
  const mainCont = "inbox";

  let contentSelector;

  if (mainCont === "inbox") contentSelector = <Inbox />;
  if (mainCont === "today") contentSelector = <Today />;
  if (mainCont === "upcoming") contentSelector = <Upcoming />;

  return <Div>{contentSelector}</Div>;
}
