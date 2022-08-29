import { useEffect, useState } from 'react';
import { CartItem } from '../../interfaces';
import CardProduct from './CardProduct';
import { ProductGridContainer } from './style';

const ProductGrid = () => {
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    )
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
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
        />
      ))}
    </ProductGridContainer>
  );
};

export default ProductGrid;
