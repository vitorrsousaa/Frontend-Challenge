import styled from 'styled-components';

export const CardCheckoutContainer = styled.div`
  background: var(--white);
  color: var(--black-900);

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  button {
    background: var(--black-900);
    color: var(--white);

    font-size: 28px;
    font-weight: 400;

    padding: 0.25rem 0.75rem;

    border-radius: 100%;

    cursor: pointer;
  }
`;
