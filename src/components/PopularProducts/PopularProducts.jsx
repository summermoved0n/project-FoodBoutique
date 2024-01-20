import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { PopularProductsItem } from 'components/PopularProductsItem/PopularProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export function PopularProducts() {
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
        <PopularProductsItem products={popular} />
      </ul>
    </>
  );
}
