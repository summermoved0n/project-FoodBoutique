import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useCart } from 'helpers/cartContexts';
import icons from '../../images/icons.svg';
import { HomeLink, CartLink } from '../../helpers/styled-conponents';
import FoodBoutiqueApi from 'helpers/api-service';
import toast from 'react-hot-toast';

const FoodBoutique = new FoodBoutiqueApi();

export function Loyaot() {
  const { addCart } = useCart();
  const [input, setInput] = useState('');

  const onInputChange = e => {
    const { value } = e.currentTarget;
    console.log(value);
    setInput(value);
  };

  const footerFormSubmit = e => {
    e.preventDefault();
    const submitData = {
      email: input,
    };
    FoodBoutique.postSubscribe(submitData)
      .then(data => {
        toast(`${data.message}`, {
          duration: 8000,
        });
        console.log(data.message);
      })
      .catch(data => {
        toast(`${data}`, {
          duration: 5000,
        });
      });
    setInput('');
  };

  return (
    <>
      <header className="header">
        <div className="conteiner header-conteiner">
          <NavLink className="header-icon-link" to="/">
            <svg className="header-icon-logo">
              <use xlinkHref={`${icons}#icon-logo`} />
            </svg>
            <svg className="header-food-boutique">
              <use xlinkHref={`${icons}#icon-food-boutique`} />
            </svg>
          </NavLink>
          <nav className="header-navigation">
            <HomeLink className="header-home-link" to="/">
              Home
            </HomeLink>
            <CartLink className="header-cart-link" to="/cart">
              <span className="header-nav-icon-conteiner">
                <svg className="header-navigation-icon">
                  <use xlinkHref={`${icons}#icon-cart`} />
                </svg>
              </span>
              <span className="header-cart-link-text">
                {' '}
                CART ({addCart.length ?? 0})
              </span>
            </CartLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="conteiner">
          <div className="footer-top-wraper">
            <div className="footer-left-wraper">
              <NavLink className="footer-food-link" to="/">
                <svg className="footer-icon-logo">
                  <use xlinkHref={`${icons}#icon-logo`} />
                </svg>
                <svg className="footer-food-boutique">
                  <use xlinkHref={`${icons}#icon-food-boutique`} />
                </svg>
              </NavLink>
              <ul className="footer-social-list">
                <li>
                  <a href="https://www.facebook.com/goITclub/">
                    <svg className="footer-icon-social">
                      <use xlinkHref={`${icons}#icon-facebook`}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/goitclub/">
                    <svg className="footer-icon-social">
                      <use xlinkHref={`${icons}#icon-instagram`}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/GoIT">
                    <svg className="footer-icon-social">
                      <use xlinkHref={`${icons}#icon-youtube`}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-center-wraper">
              <h2 className="footer-title">
                Discover the Variety of Flavors and Quality
              </h2>
              <p className="footer-text">
                An online store where you will find fresh, natural and delicious
                products for a healthy life and unforgettable gastronomic
                adventures.
              </p>
            </div>
            <form className="footer-form" onSubmit={footerFormSubmit}>
              <p className="footer-subscribe-text">
                Subscribe and learn about new products!
              </p>
              <input
                className="footer-input"
                type="email"
                value={input}
                onChange={onInputChange}
                required
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                placeholder="Email"
              />
              <button className="footer-send-btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="footer-bottom-wraper">
            <p className="footer-bottom-text">
              Food Boutique. All rights reserved.
            </p>
            <ul className="footer-bottom-list">
              <li>
                <button className="footer-bottom-btn" type="button">
                  Privacy Policy
                </button>
              </li>
              <li>
                <p className="footer-bottom-slash">/</p>
              </li>
              <li>
                <button className="footer-bottom-btn" type="button">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
