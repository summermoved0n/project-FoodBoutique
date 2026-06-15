import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icons from '../../images/icons.svg';
import orderSuccess from '../../images/ordersuccess.png';
import orderSuccess2x from '../../images/ordersuccess-2x.png';
import shadow from '../../images/shadow.png';
import shadow2x from '../../images/shadow-2x.png';

const modalRoot = document.querySelector('#modal-root');

export const CartModal = ({ closeModal }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleDropBox = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className="cart-modal-conteiner" onClick={handleDropBox}>
      <div className="cart-modal-content">
        <button
          className="cart-modal-btn"
          type="button"
          onClick={() => closeModal()}
        >
          <svg className="cart-modal-icon">
            <use xlinkHref={`${icons}#icon-remove`}></use>
          </svg>
        </button>
        <div className="cart-modal-image-wraper">
          <img
            className="cart-modal-tomatoes"
            src={orderSuccess}
            srcSet={`${orderSuccess} 1x, ${orderSuccess2x} 2x`}
            alt="Order success tomatoes"
            width={140}
            height={140}
          />
          <img
            className="cart-modal-shadow"
            src={shadow}
            srcSet={`${shadow} 1x, ${shadow2x} 2x`}
            alt=""
            aria-hidden="true"
            width={140}
            height={40}
          />
        </div>
        <h3 className="cart-modal-title">Order success</h3>
        <p className="cart-modal-text">
          Thank you for shopping at Food Boutique. Your order has been received
          and is now being freshly prepared just for you! Get ready to indulge
          in nourishing goodness, delivered right to your doorstep. We're
          thrilled to be part of your journey to better health and happiness.
        </p>
      </div>
    </div>,
    modalRoot
  );
};
