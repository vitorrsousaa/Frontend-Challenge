import styled from 'styled-components';

export const ProductGridContainer = styled.section`
  display: grid;
  align-self: center;
  align-items: center;
  justify-items: center;

  margin: 4rem auto;

  gap: 1.375rem;

  max-width: 58rem;

  h6 {
    color: red;
  }

  @media (min-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1139px) and (min-width: 810px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 809px) and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 549px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
