import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--blue);

  padding: 1.8rem 5.5rem;

  @media (max-width: 450px) {
    padding: 1.8rem 1rem;
  }
`;

export const ButtonCart = styled.div`
  background: var(--white);
  color: var(--black-900);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 8px;

  padding: 0.75rem 1rem;

  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
