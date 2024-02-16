import React from 'react';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

export const ProductsItem = ({
  removeFromOrder,
  addToOrder,
  products,
  modalClick,
  addToCart,
  removeFromCart,
}) => {
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
          <li
            key={_id}
            id={_id}
            className="products-item"
            onClick={() => {
              modalClick(_id);
            }}
          >
            {is10PercentOff && (
              <svg className="product-discount-icon">
                <use xlinkHref={`${icons}#icon-discount`}></use>
              </svg>
            )}
            <div className="product-image-conteiner">
              <img
                className="products-image"
                src={img}
                alt={name}
                width={140}
              />
            </div>
            <h3 className="products-title">{name}</h3>
            <ul className="products-text-list">
              <li className="products-text-item">
                <span>Category:</span> {category.replace(/_/g, ' ')}
              </li>
              <li className="products-text-item">
                <span>Size:</span> {size}
              </li>
              <li className="products-text-item">
                <span>Popularity:</span> {popularity}
              </li>
            </ul>
            <div className="products-bottom-conteiner">
              <p className="products-text-price">${price}</p>
              {AddedtoCart(_id) ? (
                <button
                  type="button"
                  className="products-icon-btn"
                  onClick={e => {
                    e.stopPropagation();
                    removeFromCart(_id, name);
                    removeFromOrder(_id);
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
                    addToOrder({
                      productId: _id,
                      amount: 1,
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
