import React from 'react';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

export const PopularProductsItem = ({
  products,
  modalClick,
  addToCart,
  removeFromCart,
  addToOrder,
  removeFromOrder,
}) => {
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
            <img className="popular-image" src={img} alt={name} width={56} />
            <div className="popular-content-conteiner">
              <h3 className="popular-item-title">{name}</h3>
              <ul className="popular-content-list">
                <li className="popular-content-text">
                  <span>Category:</span> {category}
                </li>
                <li className="popular-content-text">
                  <span>Size:</span> {size}
                </li>
                <li className="popular-content-text">
                  <span>Popularity:</span> {popularity}
                </li>
              </ul>
              {AddedtoCart(_id) ? (
                <button
                  type="button"
                  className="popular-icon-btn"
                  onClick={e => {
                    e.stopPropagation();
                    removeFromCart(_id, name);
                    removeFromOrder(_id);
                  }}
                >
                  <FaCheck
                    className="popular-icon-check"
                    size={12}
                    color="#6d8434"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="popular-icon-btn"
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
                    addToOrder({
                      productId: _id,
                      amount: 1,
                    });
                  }}
                >
                  <svg className="popular-icon-cart">
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
