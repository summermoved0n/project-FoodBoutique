import React from 'react';
import icons from '../../images/icons.svg';

export const DiscountProductsItem = ({ products, modalClick }) => {
  return (
    <>
      {products.map(({ img, is10PercentOff, price, name, _id }) => (
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
              }}
            >
              <svg className="products-icon">
                <use xlinkHref={`${icons}#icon-cart`} />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </>
  );
};
