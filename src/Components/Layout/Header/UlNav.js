import { Colors } from "../../../helpers/Styles/Colors";
import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;

  .item {
    list-style-type: none;
    border-radius: 0.3rem;
    padding: 0 0.2rem;
  }

  .bar {
    list-style-type: none;
    border-radius: 0.3rem;
    padding: 0.2rem;
  }

  .item:hover {
    background-color: ${Colors.primaryHover};
  }
`;
