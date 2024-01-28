import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useCart } from 'helpers/cartContexts';
import icons from '../../images/icons.svg';
import { HomeLink, CartLink } from '../../helpers/styled-conponents';

export function Loyaot() {
  const { addCart } = useCart();

  return (
    <>
      <header className="header">
        <div className="header-logo-conteiner">
          <NavLink to="/">
            <svg className="header-icon-logo">
              <use xlinkHref={`${icons}#icon-logo`} />
            </svg>
            <svg className="header-food-boutique">
              <use xlinkHref={`${icons}#icon-food-boutique`} />
            </svg>
          </NavLink>
        </div>
        <nav className="header-navigation">
          <HomeLink to="/">Home</HomeLink>
          <CartLink to="/cart">
            <span className="header-nav-icon-conteiner">
              <svg className="header-navigation-icon">
                <use xlinkHref={`${icons}#icon-cart`} />
              </svg>
            </span>
            <span> CART ({addCart.length ?? 0})</span>
          </CartLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <p>Food Boutique</p>
          <ul>
            <li>f</li>
            <li>i</li>
            <li>u</li>
          </ul>
        </div>
        <div>
          <h2>Discover the Variety of Flavors and Quality</h2>
          <p>
            An online store where you will find fresh, natural and delicious
            products for a healthy life and unforgettable gastronomic
            adventures.
          </p>
        </div>
        <div>
          <p>Subscribe and learn about new products!</p>
          <input type="email" placeholder="Email" />
          <button type="button">Send</button>
        </div>
        <div>
          <p></p>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}