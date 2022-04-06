import styled from "styled-components";
import { Colors } from "../../../../helpers/Styles/Colors";
import { BorderRadius } from "../../../../helpers/Styles/BorderRadius";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: transparent;
  border: none;
  border-radius: ${BorderRadius.smaller};
  padding: 0.1rem;

  &:hover {
    background-color: ${Colors.gray200};
  }
`;
