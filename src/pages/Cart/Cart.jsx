import React from 'react';
import { useCart } from 'helpers/cartContexts';
import { CartItem } from 'components/CartItem/CartItem';
import icons from '../../images/icons.svg';

export default function Cart() {
  const { addCart, setAddCart } = useCart();

  const onDeleteAll = () => {
    setAddCart([]);
  };

  const handleDelete = id => {
    const newCart = addCart.filter(item => item._id !== id);
    setAddCart(newCart);
  };

  return (
    <div className="cart-conteiner">
      <h2 className="cart-title">
        <div className="cart-icon-wraper">
          <svg className="cart-title-icon">
            <use xlinkHref={`${icons}#icon-cart`}></use>
          </svg>
        </div>
        <p>CART({addCart.length})</p>
      </h2>
      {addCart.length !== 0 ? (
        <div className="cart-products-conteiner">
          <div className="cart-products-left-wraper">
            <button
              className="cart-products-btn"
              type="button"
              onClick={onDeleteAll}
            >
              Delete all{' '}
              <svg className="cart-delete-icon">
                <use xlinkHref={`${icons}#icon-remove`}></use>
              </svg>
            </button>
            <ul>
              {addCart && (
                <CartItem products={addCart} handleDelete={handleDelete} />
              )}
            </ul>
          </div>
          <div className="cart-products-right-wraper">
            <h2>Your Order</h2>
            <div>
              <p>Total</p>
              <span>Sum: $0</span>
            </div>
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button type="submit">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="cart-empty-conteiner">
          <img
            src={require('../../images/basket.png')}
            alt="Basket"
            width={164}
          />
          <h3 className="cart-empty-title">
            Your basket is <span>empty...</span>
          </h3>
          <p className="cart-empty-text">
            Go to the main page to select your favorite products and add them to
            the cart.
          </p>
        </div>
      )}
    </div>
  );
}
