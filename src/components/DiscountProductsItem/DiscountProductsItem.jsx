import React from 'react';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

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
              {AddedtoCart(_id) ? (
                <button
                  type="button"
                  className="products-icon-btn"
                  onClick={e => {
                    e.stopPropagation();
                  }}
                >
                  <FaCheck size={18} color="#E8E8E2" />
                </button>
              ) : (
                <button
                  type="button"
                  className="products-icon-btn"
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
                  <svg className="products-icon-cart">
                    <use xlinkHref={`${icons}#icon-cart`} />
                  </svg>
                </button>
              )}
            </div>
          </li>
        )
      )}
    </>
  );
};
