import React from 'react';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

export const DiscountProductsItem = ({
  products,
  modalClick,
  addToCart,
  removeFromCart,
}) => {
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
            {is10PercentOff && (
              <svg className="discount-icon">
                <use xlinkHref={`${icons}#icon-discount`}></use>
              </svg>
            )}
            <div className="discount-image">
              <img
                // className="discount-image"
                src={img}
                alt={name}
                width={105}
              />
            </div>
            <div className="discount-content-conteiner">
              <h3 className="discount-content-text">{name}</h3>
              <div className="discount-content-wraper">
                <p className="discount-content-text">${price}</p>
                {AddedtoCart(_id) ? (
                  <button
                    type="button"
                    className="products-icon-btn"
                    onClick={e => {
                      e.stopPropagation();
                      removeFromCart(_id, name);
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
            </div>
          </li>
        )
      )}
    </>
  );
};
