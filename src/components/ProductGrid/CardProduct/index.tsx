import {
  ButtonProduct,
  CardProductContainer,
  InfoProductContainer,
} from './style';

import { FiShoppingBag } from 'react-icons/fi';
import cartSlice from '../../../redux/cartSlice';
import store from '../../../redux/store';
import { CartItem } from '../../../interfaces';

const CardProduct = ({ price, name, photo, description, id }: CartItem) => {
  function handleAddOnCart() {
    const item = { price, name, photo, id };

    const currentProducts = store.getState().cartSlice;

    const itemExists = currentProducts.find(
      (product) => product.id === item.id
    );

    if (itemExists) {
      store.dispatch(cartSlice.actions.removeItem(item.id));
      store.dispatch(
        cartSlice.actions.addToCart({
          ...item,
          quantity: itemExists.quantity + 1,
        })
      );
    } else {
      store.dispatch(cartSlice.actions.addToCart({ ...item, quantity: 1 }));
    }
  }

  return (
    <CardProductContainer>
      <img src={photo} alt={name} />

      <InfoProductContainer>
        <div>
          <h1>{name}</h1>
          <button>
            {price &&
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(Number(price))}
          </button>
        </div>

        <h2>
          {description.length > 60
            ? `${description.slice(0, 60)}...`
            : description}
        </h2>
      </InfoProductContainer>

      <ButtonProduct onClick={handleAddOnCart}>
        <FiShoppingBag />
        <p>Comprar</p>
      </ButtonProduct>
    </CardProductContainer>
  );
};

export default CardProduct;
