import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { DiscountProductsItem } from 'components/DiscountProductsItem/DiscountProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export default function DiscountProducts() {
  const [discount, setDiscount] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchDiscount().then(data => {
      setDiscount(data.splice(0, 2));
    });
  }, []);
  return (
    <>
      <h2>Discount products</h2>
      <ul>
        <DiscountProductsItem products={discount} />
      </ul>
    </>
  );
}
