import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import React, { useEffect, useState } from 'react';
import { useCart } from 'helpers/cartContexts';
import toast, { Toaster } from 'react-hot-toast';
import Products from 'components/Products/Products';

const modalRoot = document.querySelector('#modal-root');
const fixBlocks = document.querySelectorAll('.fix-block');

export default function Home() {
  const { addCart, setAddCart } = useCart();
  const { order, setOrder } = useCart();
  const [modalItem, setModalItem] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectByQuery, setSelectByQuery] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(addCart));
    window.localStorage.setItem('order', JSON.stringify(order));
  }, [addCart, order]);

  const onModalClick = id => {
    const paddingOffset = window.innerWidth - modalRoot.offsetWidth + 'px';
    document.body.style.paddingRight = paddingOffset;
    fixBlocks.forEach(el => {
      el.style.paddingRight = paddingOffset;
    });
    setModalItem(id);
    setIsModal(true);
    document.body.style.overflow = 'hidden';
  };

  const modalClose = () => {
    document.body.style.paddingRight = '0px';
    fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
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

  const addToOrder = data => {
    setOrder(prevState => [...prevState, data]);
  };

  const removeFromOrder = id => {
    const orderDeleteProduct = order.filter(item => item.productId !== id);
    setOrder(orderDeleteProduct);
  };

  return (
    <div className="home-conteiner">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Hero />
      <Filter
        setCategory={setCategory}
        setKeyword={setKeyword}
        category={category}
        setSearchQuery={setSearchQuery}
        setSelectByQuery={setSelectByQuery}
      />
      <section className="home-section">
        {isModal && (
          <Modal
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            modalClose={modalClose}
            modalItem={modalItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
        <div className="home-left-wraper">
          <Products
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            removeFromCart={removeFromCart}
            modalClick={onModalClick}
            addToCart={addToCart}
            itemsPerPage={9}
            category={category}
            keyword={keyword}
            searchQuery={searchQuery}
            selectByQuery={selectByQuery}
          />
        </div>
        <div className="home-right-wraper">
          <PopularProducts
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            modalClick={onModalClick}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <DiscountProducts
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            modalClick={onModalClick}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </section>
    </div>
  );
}
