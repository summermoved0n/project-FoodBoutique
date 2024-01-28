import { useCart } from './cartContexts';

export const AddedtoCart = id => {
  const { addCart } = useCart();
  const alreadyInCart = addCart.find(item => item._id === id);
  return alreadyInCart;
};
