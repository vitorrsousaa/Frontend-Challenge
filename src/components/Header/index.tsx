import { ButtonCart, HeaderContainer } from './style';
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import Logo from '../Logo';
import { useCart } from '../../context/Cart/CartContext';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { setCartIsOpen } = useCart();

  const cartItems = useSelector((state: any) => {
    const total = state.cartSlice
      .map((item: any) => item.quantity)
      .reduce((acc: number, total: number) => acc + total);

    return total;
  });

  return (
    <HeaderContainer>
      <Logo />
      <ButtonCart onClick={() => setCartIsOpen()}>
        <TiShoppingCart />
        <h2>{cartItems || 0}</h2>
      </ButtonCart>
    </HeaderContainer>
  );
};

export default Header;
