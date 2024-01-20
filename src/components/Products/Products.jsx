import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchProduct().then(data => {
      const { results } = data;
      setProducts(results);
    });
  }, []);
  console.log(products);
  return (
    <>
      <ul className="products-list">
        <ProductsItem products={products} />
      </ul>
    </>
  );
}
