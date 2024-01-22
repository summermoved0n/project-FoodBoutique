import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import React, { useEffect, useState } from 'react';
import { useCart } from 'helpers/cartContext';
import PaginatedItems from 'components/Products/Products';

export default function Home() {
  const { addCart, setAddCart } = useCart();
  const [modalItem, setModalItem] = useState('');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(addCart));
  }, [addCart]);

  const onModalClick = id => {
    setModalItem(id);
    setIsModal(true);
  };

  const modalClose = () => {
    setIsModal(false);
  };

  const addToCart = data => {
    setAddCart(prevState => [...prevState, data]);
  };

  return (
    <>
      <Hero />
      <Filter />
      <section className="home">
        {isModal && (
          <Modal
            modalClose={modalClose}
            modalItem={modalItem}
            addToCart={addToCart}
          />
        )}
        <div className="left-wraper">
          <PaginatedItems
            modalClick={onModalClick}
            addToCart={addToCart}
            itemsPerPage={9}
          />
        </div>
        <div className="right-wraper">
          <PopularProducts modalClick={onModalClick} addToCart={addToCart} />
          <DiscountProducts modalClick={onModalClick} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
}
