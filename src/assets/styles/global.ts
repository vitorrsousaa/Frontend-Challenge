import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --blue: #0f52ba;

    --black-900: #000000;
    --black-600: #2c2c2c;
    --black-400: #373737;

    --white: #ffffff;

    --gray: #eeeeee;
  }

 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: var(--white);

    color: var(--white) ;

  }

  button {
    border-radius: 8px ;
    border: none ;
  }




  html {
    scroll-behavior: smooth;

    @media (min-width: 1024px) {
      font-size: 93, 75%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 87, 5%;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 81, 25%;
    }

    @media (max-width: 374px) {
      font-size: 68, 75%;
    }
  }


`;

export default GlobalStyle;
