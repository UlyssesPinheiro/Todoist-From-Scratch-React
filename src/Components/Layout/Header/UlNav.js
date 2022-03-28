import { Colors } from "../../../helpers/Styles/Colors";
import styled from "styled-components";
import { BorderRadius } from "../../../helpers/Styles/BorderRadius";

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;

  .item {
    list-style-type: none;
    border-radius: ${BorderRadius.small};
    padding: 0 0.2rem;
  }

  .bar {
    list-style-type: none;
    border-radius: ${BorderRadius.small};
    padding: 0.2rem;
  }

  .item:hover {
    background-color: ${Colors.primaryHover};
  }
`;
