import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export function Loyaot() {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('products'));
    setCartLength(storage.length);
    console.log(cartLength);
  }, [cartLength]);

  return (
    <>
      <header>
        <p>Food Boutique</p>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">CART ({cartLength})</NavLink>
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
