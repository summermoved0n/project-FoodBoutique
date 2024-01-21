import React from 'react';
import icons from '../../images/icons.svg';

export const DiscountProductsItem = ({ products, modalClick, addToCart }) => {
  return (
    <>
      {products.map(
        ({ img, is10PercentOff, category, size, price, name, _id }) => (
          <li
            key={_id}
            id={_id}
            className="discount-item"
            onClick={() => {
              modalClick(_id);
            }}
          >
            <div>
              <img src={img} alt={name} width={56} />
            </div>
            <div>
              <h3>{name}</h3>
              <p>${price}</p>
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
