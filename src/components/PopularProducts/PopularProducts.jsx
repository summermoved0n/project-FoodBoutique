import React, { useEffect, useState } from 'react';
import FoodBoutiqueApi from 'helpers/api-service';
import { PopularProductsItem } from 'components/PopularProductsItem/PopularProductsItem';

const FoodBoutique = new FoodBoutiqueApi();

export function PopularProducts({
  modalClick,
  addToCart,
  removeFromCart,
  addToOrder,
  removeFromOrder,
}) {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    FoodBoutique.getFetchPopular().then(data => {
      setPopular(data);
    });
  }, []);
  return (
    <div className="popular-products-conteiner">
      <h2 className="popular-products-title">Popular products</h2>
      <ul className="popular-products-list">
        <PopularProductsItem
          addToOrder={addToOrder}
          removeFromOrder={removeFromOrder}
          removeFromCart={removeFromCart}
          modalClick={modalClick}
          products={popular}
          addToCart={addToCart}
        />
      </ul>
    </div>
  );
}
