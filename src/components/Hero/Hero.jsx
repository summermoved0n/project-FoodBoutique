import React from 'react';
import icons from '../../images/icons.svg';

export const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Welcome to the <span className="hero-food">Food</span> Boutique!
      </h1>
      <p className="hero-text">
        With Food Boutique, you're not just subscribing to food, you're signing
        up for a fresher, fitter, and happier you.
      </p>
      <div className="hero-image">
        <svg className="hero-icon">
          <use xlinkHref={`${icons}#icon-organic-food-hero-stamp`}></use>
        </svg>
      </div>
    </section>
  );
};
