import React from 'react';
import icons from '../../images/icons.svg';

export const PopularProductsItem = ({ products, modalClick }) => {
  return (
    <>
      {products.map(
        ({ category, img, is10PercentOff, name, popularity, size, _id }) => (
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
