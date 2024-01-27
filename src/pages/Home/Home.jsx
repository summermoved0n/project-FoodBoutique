import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import React, { useEffect, useState } from 'react';
import { useCart } from 'helpers/cartContexts';
import Products from 'components/Products/Products';

export default function Home() {
  const { addCart, setAddCart } = useCart();
  const [modalItem, setModalItem] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

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
      <Filter
        setCategory={setCategory}
        setKeyword={setKeyword}
        category={category}
      />
      <section className="home">
        {isModal && (
          <Modal
            modalClose={modalClose}
            modalItem={modalItem}
            addToCart={addToCart}
          />
        )}
        <div className="left-wraper">
          <Products
            modalClick={onModalClick}
            addToCart={addToCart}
            itemsPerPage={9}
            category={category}
            keyword={keyword}
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
