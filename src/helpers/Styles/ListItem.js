import styled from "styled-components";
import { Font } from "./Font";

export const ListItem = styled.li`
  display: flex;
  padding: 0.3rem;
  gap: 0.3rem;
  align-items: center;

  & span {
    font-size: ${Font.size1};
  }
`;
