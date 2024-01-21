import React from 'react';
import icons from '../../images/icons.svg';

export const PopularProductsItem = ({ products, modalClick, addToCart }) => {
  return (
    <>
      {products.map(
        ({
          category,
          img,
          is10PercentOff,
          name,
          price,
          popularity,
          size,
          _id,
        }) => (
          <li
            key={_id}
            id={_id}
            className="popular-item"
            onClick={() => {
              modalClick(_id);
            }}
          >
            <div>
              <img src={img} alt={name} width={56} />
            </div>
            <div>
              <h3>{name}</h3>
              <span>Category: {category}</span>
              <span>Size: {size}</span>
              <span>Popularity: {popularity}</span>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  addToCart({
                    img,
                    is10PercentOff,
                    name,
                    category,
                    size,
                    price,
                    _id,
                  });
                }}
              >
                <svg className="products-icon">
                  <use xlinkHref={`${icons}#icon-cart`} />
                </svg>
              </button>
            </div>
          </li>
        )
      )}
    </>
  );
};
