import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Loyaot() {
  return (
    <>
      <header>
        <p>Food Boutique</p>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">CART (0)</NavLink>
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
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
