import {
  CardCheckoutButtonRemove,
  CardCheckoutContainer,
  CardCheckoutInfo,
  CardCheckoutQuantityButton,
} from './style';

interface CardCheckoutProps {}

const CardCheckout = ({}: CardCheckoutProps) => {
  return (
    <CardCheckoutContainer>
      <CardCheckoutButtonRemove>X</CardCheckoutButtonRemove>
      <CardCheckoutInfo>
        <img
          src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"
          alt=""
        />
        <h1>Apple Watch Series 4 GPs</h1>
        <CardCheckoutQuantityButton>
          <p>Qtd:</p>
          <div>
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
        </CardCheckoutQuantityButton>
        <h2>R$ 399</h2>
      </CardCheckoutInfo>
    </CardCheckoutContainer>
  );
};

export default CardCheckout;
