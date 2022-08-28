import styled from 'styled-components';

export const CardCheckoutContainer = styled.div`
  background: var(--white);
  color: var(--black-900);

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  /* padding: 1.25rem; */

  button {
    cursor: pointer;
  }

  h1 {
    font-weight: 400;
    font-size: 0.813rem;
    color: var(--black-600);
  }

  p {
    font-weight: 400;
    font-size: 0.313rem;
    color: var(--black-900);
  }

  h2 {
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--black-900);
  }
`;

export const CardCheckoutButtonRemove = styled.button`
  background: var(--black-900);
  color: var(--white);

  font-size: 0.875rem;
  font-weight: 400;

  height: 1.125rem;
  width: 1.125rem;

  border-radius: 100%;

  position: relative;
  top: -10px;
  left: 96%;
  z-index: 10;
`;

export const CardCheckoutInfo = styled.div`
  img {
    width: 3.125rem;
    height: 3.75rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardCheckoutQuantityButton = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 10px;
  }

  div {
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    font-size: 10px;

    button {
      &::after {
        content: '';
        color: black;
      }
    }
  }
`;
