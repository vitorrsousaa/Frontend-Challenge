import { useCart } from '../../context/Cart/CartContext';
import CardCheckout from './CardCheckout';
import { CartContainer, FooterCart, HeaderCart } from './style';

interface CartProps {}

const Cart = ({}: CartProps) => {
  const { cartOpen, setCartIsOpen } = useCart();

  return (
    <CartContainer open={cartOpen}>
      <HeaderCart>
        <h1>Carrinho de compras</h1>
        <button onClick={setCartIsOpen}>X</button>
      </HeaderCart>

      <CardCheckout />

      <FooterCart>
        <div>
          <h1>Total:</h1>
          <p>R$ 798</p>
        </div>

        <div>Finalizar Compra</div>
      </FooterCart>
    </CartContainer>
  );
};

export default Cart;
