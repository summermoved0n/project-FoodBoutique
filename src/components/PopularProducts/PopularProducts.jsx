import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { PopularProductsItem } from 'components/PopularProductsItem/PopularProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export function PopularProducts({ modalClick, addToCart }) {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    FoodBoutique.getFetchPopular().then(data => {
      setPopular(data);
    });
  });
  return (
    <>
      <h2>Popular products</h2>
      <ul>
        <PopularProductsItem
          modalClick={modalClick}
          products={popular}
          addToCart={addToCart}
        />
      </ul>
    </>
  );
}
