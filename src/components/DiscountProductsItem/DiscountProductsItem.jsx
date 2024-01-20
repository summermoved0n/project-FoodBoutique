import React from 'react';

export const DiscountProductsItem = ({ products }) => {
  return (
    <>
      {products.map(({ img, is10PercentOff, price, name, _id }) => (
        <li key={_id} id={_id} className="discount-item">
          <div>
            <img src={img} alt={name} width={56} />
          </div>
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button type="button">Cart</button>
          </div>
        </li>
      ))}
    </>
  );
};
