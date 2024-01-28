import React from 'react';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

export const ProductsItem = ({ products, modalClick, addToCart }) => {
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
            <img src={img} alt={name} width={140} />
            <h3>{name}</h3>
            <span>Category: {category}</span>
            <span>Size: {size}</span>
            <span>Popularity: {popularity}</span>
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
          </li>
        )
      )}
    </>
  );
};
