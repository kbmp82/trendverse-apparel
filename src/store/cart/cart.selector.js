import { createSelector } from "reselect";

//selectors get data from state

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    const total = cartItems.reduce((total, item) => item.total + total, 0);
    return total;
  }
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    return newCartCount;
  }
);
