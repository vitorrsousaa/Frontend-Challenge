import type { NextPage } from 'next';
import Head from 'next/head';

import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="criado pelo vitão" />
      </Head>

      <Header />

      <Cart />

      <ProductGrid />

      <Footer />
    </>
  );
};

export default Home;
