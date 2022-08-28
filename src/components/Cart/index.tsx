import { useSelector } from 'react-redux';
import { useCart } from '../../context/Cart/CartContext';
import CardCheckout from './CardCheckout';
import { CartContainer, FooterCart, HeaderCart } from './style';

interface CartProps {}

const Cart = ({}: CartProps) => {
  const { cartOpen, setCartIsOpen } = useCart();

  const cartItems = useSelector((state: any) => {
    if (state.cartSlice.length > 1) {
      const total = state.cartSlice
        .map((item: any) => parseInt(item.price) * item.quantity)
        .reduce((acc: number, total: number) => acc + total);

      return total;
    } else {
      const total = 0;

      return total;
    }
  });

  return (
    <CartContainer open={cartOpen}>
      <HeaderCart>
        <h1>Carrinho de compras</h1>
        <button onClick={setCartIsOpen}>X</button>
      </HeaderCart>

      <CardCheckout />

      <FooterCart>
        <div>
          <h2>Total:</h2>
          <p>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(Number(cartItems))}
          </p>
        </div>

        <div>
          <h1>Finalizar Compra</h1>
        </div>
      </FooterCart>
    </CartContainer>
  );
};

export default Cart;
