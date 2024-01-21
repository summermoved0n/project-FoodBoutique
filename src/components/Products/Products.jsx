import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export default function Products({ modalClick, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchProduct().then(data => {
      const { results } = data;
      setProducts(results);
    });
  }, []);
  return (
    <>
      <ul className="products-list">
        <ProductsItem
          modalClick={modalClick}
          products={products}
          addToCart={addToCart}
        />
      </ul>
    </>
  );
}
