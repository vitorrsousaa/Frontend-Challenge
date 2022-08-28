import styled from 'styled-components';

export const CardProductContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  color: var(--black-600);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14rem;
  height: 18rem;

  h1 {
    font-size: 1rem;
    font-weight: 400;
  }

  h2 {
    font-size: 0.625rem;
    font-weight: 300;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.7s;
  }

  img {
    height: 158px;
  }
`;

export const InfoProductContainer = styled.div`
  max-width: 12.75rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    padding: 0.125rem 0.5rem;

    border-radius: 8px;

    color: var(--white);
    background: var(--black-400);

    font-size: 1rem;
    font-weight: 700;
  }
`;

export const ButtonProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0 0 8px 8px;

  background-color: var(--blue);
  color: vaR(--white);

  height: 32px;
  width: 100%;
  cursor: pointer;

  opacity: 1;
  transition: 0.3s;

  p {
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  &:hover {
    opacity: 0.7;
  }
`;
