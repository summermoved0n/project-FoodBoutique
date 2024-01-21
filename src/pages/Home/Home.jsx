import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import Products from 'components/Products/Products';
import React, { useEffect, useState } from 'react';

const LS_KEY = 'products';

export default function Home() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  });
  const [modalItem, setModalItem] = useState('');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(cart));
  }, [cart]);

  const onModalClick = id => {
    setModalItem(id);
    setIsModal(true);
  };

  const modalClose = () => {
    setIsModal(false);
  };

  const addToCart = data => {
    setCart(prevState => [...prevState, data]);
  };

  return (
    <>
      <Hero />
      <Filter />
      <section className="home">
        {isModal && <Modal modalClose={modalClose} modalItem={modalItem} />}
        <div className="left-wraper">
          <Products modalClick={onModalClick} addToCart={addToCart} />
        </div>
        <div className="right-wraper">
          <PopularProducts modalClick={onModalClick} />
          <DiscountProducts modalClick={onModalClick} />
        </div>
      </section>
    </>
  );
}
