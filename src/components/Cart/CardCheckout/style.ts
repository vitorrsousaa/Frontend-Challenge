import styled from 'styled-components';

export const CardCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  overflow-y: scroll;
  overflow-x: hidden;
  height: 25rem;
  width: 100%;

  padding: 3rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--white);
    border-radius: 20px;

    margin: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--black-900);
    border-radius: 20px;
  }
`;

export const CardCheckoutContent = styled.div`
  background: var(--white);
  color: var(--black-900);

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  padding: 0.75rem;

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
  top: -20px;
  left: 100%;
  z-index: 10;
`;

export const CardCheckoutInfo = styled.div`
  img {
    width: 3.56rem;
    height: 3.56rem;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.125rem;
  }

  h1 {
    max-width: 6.875rem;
  }

  @media (max-width: 32rem) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const CardCheckoutQuantityButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  button,
  span {
    font-size: 10px;
    background: transparent;
  }

  div {
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;

    font-size: 10px;

    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px;
  }
`;
