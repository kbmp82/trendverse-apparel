import { createAction } from "../../utils/firebase/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

//actions format data to dispatch and mutate state

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean);

const addItemToCart = (cartItems, product) => {
  //if existing item, increase total and quantity
  let existingCartItem = cartItems.find((item) => item.id === product.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      const quantity =
        cartItem.id === product.id ? cartItem.quantity + 1 : cartItem.quantity;
      const total =
        cartItem.id === product.id
          ? cartItem.price * quantity
          : cartItem.quantity * cartItem.price;
      return {
        id: cartItem.id,
        name: cartItem.name,
        imageUrl: cartItem.imageUrl,
        price: cartItem.price,
        quantity,
        total,
      };
    });
  }

  //new item
  return [
    ...cartItems,
    {
      ...product,
      quantity: 1,
      total: product.price,
    },
  ];
};

const decreaseItemQuantity = (cartItems, cartItem) => {
  //if existing item, increase total and quantity
  let cartItemIndex = cartItems.findIndex((item) => item.id === cartItem.id);

  if (cartItemIndex == null || cartItemIndex === -1) {
    return;
  }
  if (cartItems[cartItemIndex].quantity === 1) {
    return removeItemFromCart(cartItems, cartItem);
  }

  cartItems[cartItemIndex].quantity--;
  cartItems[cartItemIndex].total =
    cartItems[cartItemIndex].price * cartItems[cartItemIndex].quantity;

  return [...cartItems];
};

const removeItemFromCart = (cartItems, cartItem) => {
  const itemExists = cartItems.find((item) => item.id === cartItem.id);
  if (itemExists) {
    return cartItems.filter((item) => item.id !== cartItem.id);
  }
};

//action functions
export const addToCart = (cartItems, product) => {
  const newCartItems = addItemToCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems);
};

export const decreaseQuantity = (cartItems, cartItem) => {
  const newCartItems = decreaseItemQuantity(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems);
};

export const removeCartItem = (cartItems, cartItem) => {
  const newCartItems = removeItemFromCart(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems);
};
