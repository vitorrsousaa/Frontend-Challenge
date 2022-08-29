import { useSelector } from 'react-redux';
import { CartItem } from '../../../interfaces';
import cartSlice from '../../../redux/cartSlice';
import store from '../../../redux/store';

import {
  CardCheckoutButtonRemove,
  CardCheckoutContainer,
  CardCheckoutContent,
  CardCheckoutInfo,
  CardCheckoutQuantityButton,
} from './style';

const CardCheckout = () => {
  const cartProducts = useSelector((state: any) => {
    return state.cartSlice;
  });

  function handleRemoveOnCart(id: number) {
    store.dispatch(cartSlice.actions.removeItem(id));
  }

  function handleSubtractOnCart(product: CartItem) {
    store.dispatch(cartSlice.actions.decrementQuantity(product.id));
  }

  function handleAddOnCart(product: CartItem) {
    store.dispatch(cartSlice.actions.incrementQuantity(product.id));
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
