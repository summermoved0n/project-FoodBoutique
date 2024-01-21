import React from 'react';
import { useCart } from 'helpers/cartContext';
import { CartItem } from 'components/CartItem/CartItem';

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
    <>
      <div>
        <p>CART({addCart.length})</p>
        <button type="button" onClick={onDeleteAll}>
          Delete all X
        </button>
        <ul>
          {addCart && (
            <CartItem products={addCart} handleDelete={handleDelete} />
          )}
        </ul>
      </div>
      <div>
        <h2>Your Order</h2>
        <div>
          <p>Total</p>
          <span>Sum: $0</span>
        </div>
        <input type="text" name="" id="" placeholder="Enter your email" />
        <button type="submit">Checkout</button>
      </div>
    </>
  );
}
