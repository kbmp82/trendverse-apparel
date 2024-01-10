import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  decreaseQuantity: () => {},
  removeCartItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);

    //cart total
    if (cartItems.length === 0) {
      setCartTotal(0);
      return;
    }

    const total = cartItems.reduce((total, item) => item.total + total, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(addItemToCart(cartItems, product));
  };

  const decreaseQuantity = (cartItem) => {
    setCartItems(decreaseItemQuantity(cartItems, cartItem));
  };

  const removeCartItem = (cartItem) => {
    setCartItems(removeItemFromCart(cartItems, cartItem));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addToCart,
    cartCount,
    decreaseQuantity,
    removeCartItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
