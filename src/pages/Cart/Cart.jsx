import React, { useState } from 'react';
import { useCart } from 'helpers/cartContexts';
import { CartItem } from 'components/CartItem/CartItem';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import { CartModal } from 'components/CartModal/CartModal';
import FoodBoutiqueApi from 'helpers/api-service';

const FoodBoutique = new FoodBoutiqueApi();

export default function Cart() {
  const { addCart, setAddCart } = useCart();
  const { order, setOrder } = useCart();
  const [cartInput, setCartInput] = useState('');
  const [cartShowModal, setCartShowModal] = useState(false);

  const onDeleteAll = () => {
    setAddCart([]);
  };

  const handleDelete = id => {
    const newCart = addCart.filter(item => item._id !== id);
    setAddCart(newCart);
  };

  const totalPrice = () => {
    const orderAmount = order.map(item => item.amount);
    const cartPrice = addCart.map(item => item.price);
    const result = cartPrice.map((item, index) => item * orderAmount[index]);
    const total = result.reduce((acc, value) => acc + value, 0);
    return total.toFixed(2);
  };

  const handleCartChange = e => {
    const { value } = e.currentTarget;
    setCartInput(value);
  };

  const cartSubmit = e => {
    e.preventDefault();
    setCartInput('');
    setCartShowModal(true);
    const orderData = {
      email: cartInput,
      products: [...order],
    };
    FoodBoutique.postOrder(orderData);
    setAddCart([]);
    setOrder([]);
  };

  const closeModal = () => {
    setCartShowModal(false);
  };

  return (
    <div className="cart-conteiner">
      {cartShowModal && <CartModal closeModal={closeModal} />}
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
            <ul className="cart-list">
              {addCart && (
                <CartItem
                  products={addCart}
                  handleDelete={handleDelete}
                  order={order}
                  setOrder={setOrder}
                />
              )}
            </ul>
          </div>
          <div className="cart-products-right-wraper">
            <h3 className="cart-order-title">Your Order</h3>
            <div className="cart-total-conteiner">
              <p className="cart-total-text">Total</p>
              <span className="cart-total-sum">
                Sum: <span>${totalPrice()}</span>
              </span>
            </div>
            <form onSubmit={cartSubmit} className="cart-form">
              <div className="cart-input-conteiner">
                <p>Mail:</p>
                <input
                  className="cart-order-input"
                  value={cartInput}
                  type="email"
                  onChange={handleCartChange}
                />
              </div>
              {cartInput ? (
                <button className="cart-order-btn" type="submit">
                  Checkout
                </button>
              ) : (
                <button className="cart-order-btn" type="submit" disabled>
                  Checkout
                </button>
              )}
            </form>
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
            Your basket is <Link to="/">empty...</Link>
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
