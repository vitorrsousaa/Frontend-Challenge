import { useCart } from '../../context/Cart/CartContext';
import CardCheckout from './CardCheckout';
import { CartContainer, FooterCart, HeaderCart } from './style';

interface CartProps {}

const Cart = ({}: CartProps) => {
  const { cartOpen, setCartIsOpen } = useCart();

  const cartItems = useSelector((state: any) => {
    const total = state.cartSlice
      .map((item: any) => parseInt(item.price) * item.quantity)
      .reduce((acc: number, total: number) => acc + total);

    console.log(total);

    // console.log(typeof parseInt(state.cartSlice[0].quantity));
    return state.cartSlice.length;
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
          <h1>Total:</h1>
          <p>R$ 798</p>
        </div>

        <div>Finalizar Compra</div>
      </FooterCart>
    </CartContainer>
  );
};

export default Cart;
