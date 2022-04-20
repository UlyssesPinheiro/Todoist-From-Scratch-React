import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  padding-bottom: 0.8rem;

  & h2 {
    font-size: ${Font.size3};
  }
`;
