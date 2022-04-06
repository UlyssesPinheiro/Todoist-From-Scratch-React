import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";

const MasterContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 4rem;
  max-width: 1000px;
`;

const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  padding-bottom: 0.8rem;

  & h2 {
    font-size: ${Font.size3};
  }
`;

export const headerItems = {
  MasterContainer,
  Container,
  TitleNav,
  Title,
};
