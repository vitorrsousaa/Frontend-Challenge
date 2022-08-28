import { ButtonCart, HeaderContainer } from './style';
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import Logo from '../Logo';
import { useCart } from '../../context/Cart/CartContext';

interface HeaderProps {}

interface CartItem {
  id: number;
  quantity: number;
  name: string;
  photo: string;
  price: string;
}

const Header = ({}: HeaderProps) => {
  const { setCartIsOpen } = useCart();

  const cartItems = useSelector((state: any) => {
    return state.cartSlice.length;
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
