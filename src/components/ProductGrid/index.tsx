import { useEffect, useState } from 'react';
import CardProduct from '../CardProduct';
import { ProductGridContainer } from './style';

interface ProductGridProps {}

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  createdAt: string;
  photo: string;
  price: string;
  description: string;
  updatedAt: string;
}

const ProductGrid = ({}: ProductGridProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

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
