import React from "react";
import { headerItems } from "../Helpers/HeaderItems";
import MainAddTask from "../Helpers/MainAddTask/MainAddTask";

export default function Completed() {
  return (
    <headerItems.MasterContainer>
      <headerItems.Container>
        <headerItems.TitleNav>
          <headerItems.Title>
            <h2>Completed</h2>
          </headerItems.Title>
        </headerItems.TitleNav>
        <MainAddTask />
      </headerItems.Container>
    </headerItems.MasterContainer>
  );
}
