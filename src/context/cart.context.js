import { createContext, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems(addItemToCart(cartItems, product));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
