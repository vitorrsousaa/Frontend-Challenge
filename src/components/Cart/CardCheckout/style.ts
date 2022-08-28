import styled from 'styled-components';

export const CardCheckoutContainer = styled.div`
  background: var(--white);
  color: var(--black-900);

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  button {
    cursor: pointer;
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
`;
