import { ButtonCart, HeaderContainer } from './style';
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import Logo from '../Logo';
import { useCart } from '../../context/Cart/CartContext';

const Header = () => {
  const { setCartIsOpen } = useCart();

  const cartItems = useSelector((state: any) => {
    if (state.cartSlice.length > 0) {
      const total = state.cartSlice
        .map((item: any) => item.quantity)
        .reduce((acc: number, total: number) => acc + total);

      return total;
    } else {
      const total = 0;

      return total;
    }
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
