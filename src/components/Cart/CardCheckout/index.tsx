import { useSelector } from 'react-redux';
import {
  CardCheckoutButtonRemove,
  CardCheckoutContainer,
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

  return (
    <>
      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product: CartItem) => (
            <CardCheckoutContainer key={product.name}>
              <CardCheckoutButtonRemove>X</CardCheckoutButtonRemove>
              <CardCheckoutInfo>
                <div>
                  <img src={product.photo} alt={product.name} />
                  <h1>{product.name}</h1>
                </div>
                <CardCheckoutQuantityButton>
                  <p>Qtd:</p>
                  <div>
                    <button>-</button>
                    <span>{product.quantity}</span>
                    <button>+</button>
                  </div>
                </CardCheckoutQuantityButton>
                <h2>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(Number(product.price))}
                </h2>
              </CardCheckoutInfo>
            </CardCheckoutContainer>
          ))}
        </>
      ) : (
        <>
          <h1>Você ainda não adicionou nenhum produto no carrinho</h1>
        </>
      )}
    </>
  );
};

export default CardCheckout;
