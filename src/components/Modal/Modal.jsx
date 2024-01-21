import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FoodBoutiqueApi from 'helpers/api-service';
import icons from '../../images/icons.svg';

const FoodBoutique = new FoodBoutiqueApi();
const modalRoot = document.querySelector('#modal-root');

export function Modal({ modalItem, modalClose }) {
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

  const { category, desc, img, is10PercentOff, name, popularity, price, size } =
    modalContent;

  return createPortal(
    <div className="modal-conteiner" onClick={onBackDropClick}>
      <div className="modal-content">
        <div>
          <button
            type="button"
            onClick={() => {
              modalClose();
            }}
          >
            X
          </button>
          <div>
            <img src={img} alt={name} width={160} />
          </div>
          <div>
            <h3>{name}</h3>
            <span>Category: {category}</span>
            <span>Size: {size}</span>
            <span>Popularity: {popularity}</span>
            <p>{desc}</p>
          </div>
        </div>
        <div>
          <p>${price}</p>
          <button type="button">
            Add to{' '}
            <svg className="products-icon">
              <use xlinkHref={`${icons}#icon-cart`} />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
