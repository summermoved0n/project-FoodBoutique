import React from 'react';

export const ProductsItem = ({ products }) => {
  return (
    <>
      {products.map(
        ({
          category,
          img,
          is10PercentOff,
          name,
          popularity,
          price,
          size,
          _id,
        }) => (
          <li key={_id} id={_id} className="products-item">
            <img src={img} alt={name} width={140} />
            <h3>{name}</h3>
            <span>Category: {category}</span>
            <span>Size: {size}</span>
            <span>Popularity: {popularity}</span>
            <p>${price}</p>
            <button type="button">Cart</button>
          </li>
        )
      )}
    </>
  );
};
