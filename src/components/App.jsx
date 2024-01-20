import { Route, Routes } from 'react-router-dom';
import { Loyaot } from './Loyaot/Loyaot';
import Home from 'pages/Home/Home';
import Cart from 'pages/Cart/Cart';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyaot />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};
