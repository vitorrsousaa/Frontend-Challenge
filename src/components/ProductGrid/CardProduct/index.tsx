import {
  ButtonProduct,
  CardProductContainer,
  InfoProductContainer,
} from './style';

import { FiShoppingBag } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../../redux/cartSlice';
import cartReducer from '../../../redux/cartReducer';
import store from '../../../redux/store';
interface CardProductProps {
  id: number;
  name: string;
  brand: string;
  photo: string;
  price: string;
  description: string;
}

const CardProduct = ({
  price,
  name,
  photo,
  description,
  id,
}: CardProductProps) => {
  function handleAddOnCart() {
    const item = { price, name, photo, id };
    store.dispatch(cartSlice.actions.addToCart(item));
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
