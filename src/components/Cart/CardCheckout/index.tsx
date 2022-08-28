import { useSelector } from 'react-redux';
import cartSlice from '../../../redux/cartSlice';
import store from '../../../redux/store';
import {
  CardCheckoutButtonRemove,
  CardCheckoutContainer,
  CardCheckoutContent,
  CardCheckoutInfo,
  CardCheckoutQuantityButton,
} from './style';

interface CardCheckoutProps {}

interface CartItem {
  id: number;
  quantity: number;
  name: string;
  photo: string;
  price: string;
}

const CardCheckout = ({}: CardCheckoutProps) => {
  const cartProducts = useSelector((state: any) => {
    return state.cartSlice;
  });

  function handleRemoveOnCart(id: number) {
    store.dispatch(cartSlice.actions.removeItem(id));
  }

  function handleSubtractOnCart(product: CartItem) {
    if (product.quantity > 1) {
      store.dispatch(cartSlice.actions.removeItem(product.id));
      store.dispatch(
        cartSlice.actions.addToCart({
          ...product,
          quantity: product.quantity - 1,
        })
      );
    }
  }

  function handleAddOnCart(product: CartItem) {
    store.dispatch(cartSlice.actions.removeItem(product.id));
    store.dispatch(
      cartSlice.actions.addToCart({
        ...product,
        quantity: product.quantity + 1,
      })
    );
  }

  return (
    <CardCheckoutContainer>
      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product: CartItem) => (
            <CardCheckoutContent key={product.name}>
              <CardCheckoutButtonRemove
                onClick={() => handleRemoveOnCart(product.id)}
              >
                X
              </CardCheckoutButtonRemove>
              <CardCheckoutInfo>
                <div>
                  <img src={product.photo} alt={product.name} />
                  <h1>{product.name}</h1>
                </div>
                <CardCheckoutQuantityButton>
                  <p>Qtd:</p>
                  <div>
                    <button onClick={() => handleSubtractOnCart(product)}>
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleAddOnCart(product)}>+</button>
                  </div>
                </CardCheckoutQuantityButton>
                <h2>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(Number(product.price))}
                </h2>
              </CardCheckoutInfo>
            </CardCheckoutContent>
          ))}
        </>
      ) : (
        <>
          <h1>Você ainda não adicionou nenhum produto no carrinho</h1>
        </>
      )}
    </CardCheckoutContainer>
  );
};

export default CardCheckout;
