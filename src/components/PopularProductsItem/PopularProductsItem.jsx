import React from 'react';

export const PopularProductsItem = ({ products }) => {
  return (
    <>
      {products.map(
        ({ category, img, is10PercentOff, name, popularity, size, _id }) => (
          <li key={_id} id={_id} className="popular-item">
            <div>
              <img src={img} alt={name} width={56} />
            </div>
            <div>
              <h3>{name}</h3>
              <span>Category: {category}</span>
              <span>Size: {size}</span>
              <span>Popularity: {popularity}</span>
              <button type="button">Cart</button>
            </div>
          </li>
        )
      )}
    </>
  );
};
