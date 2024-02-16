import React from 'react';
import icons from '../../images/icons.svg';
import { GoPlus } from 'react-icons/go';
import { PiMinus } from 'react-icons/pi';

export const CartItem = ({ products, handleDelete, order, setOrder }) => {
  const productCounter = id => {
    const counter = order.find(item => {
      if (item.productId === id) {
        return true;
      }
      return false;
    });
    if (counter) {
      return counter.amount;
    } else {
      return 1;
    }
  };

  const handleDecrementClick = id => {
    setOrder(prevState => {
      return prevState.map(item => {
        if (item.productId === id && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    });
  };

  const handleIncrementClick = id => {
    setOrder(prevState => {
      return prevState.map(item => {
        if (item.productId === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    });
  };

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
              <div className="cart-toggle-counter">
                <p className="cart-item-price">${price}</p>
                <div className="cart-counter-btns">
                  <button
                    className="cart-quantity-btn"
                    type="button"
                    onClick={() => handleDecrementClick(_id)}
                  >
                    <PiMinus size={18} />
                  </button>
                  <p className="cart-quantity-product">{productCounter(_id)}</p>
                  <button
                    className="cart-quantity-btn"
                    type="button"
                    onClick={() => handleIncrementClick(_id)}
                  >
                    <GoPlus size={18} />
                  </button>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </>
  );
};
