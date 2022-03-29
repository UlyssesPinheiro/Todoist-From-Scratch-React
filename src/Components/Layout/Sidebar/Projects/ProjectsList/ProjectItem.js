import React from "react";
import styled from "styled-components";
import { BorderRadius } from "../../../../../helpers/Styles/BorderRadius";
import { Colors } from "../../../../../helpers/Styles/Colors";
import { ListItem } from "../../../../../helpers/Styles/ListItem";

export default function ProjectItem(props) {
  const BulletDiv = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 100px;
    background-color: ${Colors.gray500};
  `;

  const StyledListItem = styled(ListItem)`
    padding: 0.6rem 0.2rem;
    gap: 0.6rem;
    /* background-color: ${Colors.gray200}; */
    padding-left: 0.8rem;
    border-radius: ${BorderRadius.small};
  `;

  return (
    <StyledListItem className={props.className}>
      <BulletDiv></BulletDiv>
      <span>ProjectItem</span>
    </StyledListItem>
  );
}
