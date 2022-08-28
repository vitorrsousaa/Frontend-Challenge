import styled from 'styled-components';

interface CartContainerProps {
  open: boolean;
}

export const CartContainer = styled.section<CartContainerProps>`
  background: var(--blue);

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  width: 30.375rem;
  height: 100%;

  overflow: hidden;
  transform: ${({ open }) => (open ? 'translateX(0px)' : 'translateX(500px)')};
  opacity: ${({ open }) => (open ? '1' : '0')};

  transition: all 0.5s;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 32rem) {
    width: 20rem;
  }
`;

export const HeaderCart = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 2.98rem;

  h1 {
    font-size: 1.688rem;
    font-weight: 700;
    max-width: 12rem;
  }

  button {
    background: var(--black-900);
    color: var(--white);

    font-size: 28px;
    font-weight: 400;

    padding: 0.25rem 0.75rem;

    border-radius: 100%;
    cursor: pointer;

    transition: all 0.7s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const FooterCart = styled.div`
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.5rem;
  }

  div:last-child {
    background: var(--black-900);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;

    cursor: pointer;

    h1 {
      color: var(--white);
      font-weight: 700;
      font-size: 1.75rem;

      text-align: center;
    }
  }

  @media (max-width: 32rem) {
    div:first-child {
      h1 {
        font-size: 0.5rem;
      }
    }

    div:last-child {
      h1 {
        text-align: center;
      }
    }
  }
`;
