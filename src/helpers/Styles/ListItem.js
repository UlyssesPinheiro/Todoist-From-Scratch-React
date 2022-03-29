import styled from "styled-components";
import { Colors } from "./Colors";
import { Font } from "./Font";
import { BorderRadius } from "./BorderRadius";

export const ListItem = styled.li`
  display: flex;
  padding: 0.3rem;
  gap: 0.3rem;
  align-items: center;
  cursor: pointer;

  & span {
    font-size: ${Font.size1};
  }
`;
