import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icons from '../../images/icons.svg';

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
            src={require('../../images/ordersuccess.png')}
            alt="Tomatoes"
            width={140}
          />
          <img
            className="cart-modal-shadow"
            src={require('../../images/shadow.png')}
            alt="Tomatoes"
            width={140}
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
