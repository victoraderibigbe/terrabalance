export const saveCartToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));
  return result;
};
