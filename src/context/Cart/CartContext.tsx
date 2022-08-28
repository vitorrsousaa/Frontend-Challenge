import { createContext, ReactNode, useContext, useState } from 'react';
import Cart from '../../components/Cart';

interface CartContextProviderProps {
  children: ReactNode;
}
interface ProductCart {
  id: number;
  name: string;
  brand: string;
  photo: string;
  price: string;
  description: string;
  qtd: number;
}
interface CartContextProps {
  productsCart: ProductCart[];
  addProductCart: () => void;
  removeProductCart: () => void;
  cartOpen: boolean;
  setCartIsOpen: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsCart, setProductsCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addProductCart() {}

  function removeProductCart() {}

  function setCartIsOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductCart,
        removeProductCart,
        cartOpen,
        setCartIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
