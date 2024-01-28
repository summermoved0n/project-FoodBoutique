import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FoodBoutiqueApi from 'helpers/api-service';
import icons from '../../images/icons.svg';
import { AddedtoCart } from 'helpers/services';
import { FaCheck } from 'react-icons/fa6';

const FoodBoutique = new FoodBoutiqueApi();
const modalRoot = document.querySelector('#modal-root');

export function Modal({ modalItem, modalClose, addToCart }) {
  const [modalContent, setModalContent] = useState([]);

  useEffect(() => {
    FoodBoutique.getFetchById(modalItem).then(data => {
      setModalContent(data);
    });
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [modalClose, modalItem]);

  const onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  const {
    category,
    desc,
    img,
    is10PercentOff,
    name,
    popularity,
    price,
    size,
    _id,
  } = modalContent;

  return createPortal(
    <div className="modal-conteiner" onClick={onBackDropClick}>
      <div className="modal-content">
        <div className="modal-top-wraper">
          <button
            className="modal-close-btn"
            type="button"
            onClick={() => {
              modalClose();
            }}
          >
            <svg className="modal-close-icon">
              <use xlinkHref={`${icons}#icon-remove`}></use>
            </svg>
          </button>
          <img className="modal-image" src={img} alt={name} width={160} />
          <div>
            <h3 className="modal-title">{name}</h3>
            <ul className="modal-list">
              <li className="modal-item">
                <span>Category: </span>
                {category}
              </li>
              <li className="modal-item">
                <span>Size: </span>
                {size}
              </li>
              <li className="modal-item">
                <span>Popularity: </span>
                {popularity}
              </li>
            </ul>
            <p className="modal-text">{desc}</p>
          </div>
        </div>
        <div className="modal-bottom-wraper">
          <p className="modal-text-price">${price}</p>
          {AddedtoCart(_id) ? (
            <button
              type="button"
              className="modal-remove-btn"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              Remove from
              <svg className="modal-add-icon">
                <use xlinkHref={`${icons}#icon-cart`} />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="modal-add-btn"
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
              Add to
              <svg className="modal-add-icon">
                <use xlinkHref={`${icons}#icon-cart`} />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
