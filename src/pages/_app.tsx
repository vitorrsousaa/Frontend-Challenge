import type { AppProps } from 'next/app';
import GlobalStyle from '../assets/styles/global';
import { CartContextProvider } from '../context/Cart/CartContext';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <CartContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </CartContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
