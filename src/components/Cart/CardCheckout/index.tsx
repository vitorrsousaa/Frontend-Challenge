import { CardCheckoutButtonRemove, CardCheckoutContainer } from './style';

interface CardCheckoutProps {}

const CardCheckout = ({}: CardCheckoutProps) => {
  return (
    <CardCheckoutContainer>
      <CardCheckoutButtonRemove>X</CardCheckoutButtonRemove>
      <div>
        <img src="Imagem" alt="" />
        <h1>Apple Watch Series 4 GPs</h1>
        <div>
          <p>Qtd:</p>
          <div>
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
        </div>
        <h2>R$ 399</h2>
      </div>
    </CardCheckoutContainer>
  );
};

export default CardCheckout;
