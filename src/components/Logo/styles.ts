import styled from 'styled-components';

export const LogoContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  span {
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;
