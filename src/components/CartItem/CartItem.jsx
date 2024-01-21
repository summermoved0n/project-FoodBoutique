import React from 'react';

export const CartItem = ({ products, handleDelete }) => {
  return (
    <>
      {products.map(
        ({ img, is10PercentOff, name, category, size, price, _id }) => (
          <li key={_id} id={_id}>
            <button type="button" onClick={() => handleDelete(_id)}>
              X
            </button>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <span>Category: {category}</span>
            <span>Size: {size}</span>
            <p>${price}</p>
          </li>
        )
      )}
    </>
  );
};
