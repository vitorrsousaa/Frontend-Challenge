import { useEffect, useMemo, useState } from 'react';
import { CartItem } from '../../interfaces';
import { getProducts } from '../../services/api';
import 'react-loading-skeleton/dist/skeleton.css';
import CardProduct from './CardProduct';
import { ProductGridContainer } from './style';

const ProductGrid = () => {
  const [products, setProducts] = useState<CartItem[]>([
    {
      id: 475,
      name: 'Produto teste',
      photo: 'Foto de teste',
      price: 'Preco de teste',
      description: 'descrição de teste',
      brand: 'Brand de teste',
    },
  ]);

  useEffect(() => {
    fetch(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    )
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .finally(() => setLoading(false));
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <ProductGridContainer>
        {products.map((product) => (
          <CardProduct
            key={product.name}
            id={product.id}
            name={product.name}
            brand={product.brand}
            photo={product.photo}
            price={product.price}
            description={product.description}
            onLoading={loading}
          />
        ))}
      </ProductGridContainer>
    </>
  );
};

export default ProductGrid;
