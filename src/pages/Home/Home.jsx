import DiscountProducts from 'components/DiscountProducts/DiscountProducts';
import { Filter } from 'components/Filter/Filter';
import { Hero } from 'components/Hero/Hero';
import { PopularProducts } from 'components/PopularProducts/PopularProducts';
import Products from 'components/Products/Products';
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Filter />
      <section className="home">
        <div className="left-wraper">
          <Products />
        </div>
        <div className="right-wraper">
          <PopularProducts />
          <DiscountProducts />
        </div>
      </section>
    </>
  );
}
