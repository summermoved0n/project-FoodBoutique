import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { DiscountProductsItem } from 'components/DiscountProductsItem/DiscountProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export default function DiscountProducts({ modalClick, addToCart }) {
  const [discount, setDiscount] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchDiscount().then(data => {
      setDiscount(data.splice(0, 2));
    });
  }, []);
  return (
    <div className="discount-products-conteiner">
      <h2 className="discount-products-title">Discount products</h2>
      <ul className="discount-products-list">
        <DiscountProductsItem
          modalClick={modalClick}
          products={discount}
          addToCart={addToCart}
        />
      </ul>
    </div>
  );
}
