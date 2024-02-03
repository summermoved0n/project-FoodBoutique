import React from 'react';
import icons from '../../images/icons.svg';

export const CartItem = ({ products, handleDelete }) => {
  return (
    <>
      {products.map(
        ({ img, is10PercentOff, name, category, size, price, _id }) => (
          <li className="cart-item" key={_id} id={_id}>
            <button
              className="cart-close-btn"
              type="button"
              onClick={() => handleDelete(_id)}
            >
              <svg className="cart-item-icon">
                <use xlinkHref={`${icons}#icon-remove`}></use>
              </svg>
            </button>
            <div className="cart-image-wraper">
              <img src={img} alt={name} width={72} />
            </div>
            <div className="cart-item-content-wraper">
              <div>
                <h3 className="cart-item-title">{name}</h3>
                <span className="cart-item-text">
                  Category: <span>{category}</span>
                </span>
                <span className="cart-item-text">
                  Size: <span>{size}</span>
                </span>
              </div>
              <p className="cart-item-price">${price}</p>
            </div>
          </li>
        )
      )}
    </>
  );
};
