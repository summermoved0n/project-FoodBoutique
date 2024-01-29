import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useCart } from 'helpers/cartContexts';
import toast, { Toaster } from 'react-hot-toast';
// import Products from 'components/Products/Products';

const Products = lazy(() => import('../../components/Products/Products'));

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
    document.body.style.overflow = 'hidden';
  };

  const modalClose = () => {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  };

  const addToCart = data => {
    setAddCart(prevState => [...prevState, data]);
    toast.success(`'${data.name}' has been added to your cart!`);
  };

  const removeFromCart = (id, name) => {
    const deleteFromCart = addCart.filter(item => item._id !== id);
    setAddCart(deleteFromCart);
    toast.error(`'${name}' has been removed from the cart!`);
  };

  return (
    <div>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
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
            removeFromCart={removeFromCart}
          />
        )}
        <div className="home-left-wraper">
          <Suspense fallback={<div>Loading...</div>}>
            <Products
              removeFromCart={removeFromCart}
              modalClick={onModalClick}
              addToCart={addToCart}
              itemsPerPage={9}
              category={category}
              keyword={keyword}
            />
          </Suspense>
        </div>
        <div className="home-right-wraper">
          <PopularProducts
            modalClick={onModalClick}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <DiscountProducts
            modalClick={onModalClick}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </section>
    </div>
  );
}
