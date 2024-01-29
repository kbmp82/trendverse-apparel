// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/firebase/reducer.utils";

// const CART_ACTION_TYPES = {
//   SET_CART: "SET_CART",
//   SET_CART_OPEN: "SET_CART_OPEN",
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`wrong action type, ${type}, in cartReducer`);
//   }
// };

// const addItemToCart = (cartItems, product) => {
//   //if existing item, increase total and quantity
//   let existingCartItem = cartItems.find((item) => item.id === product.id);

//   if (existingCartItem) {
//     return cartItems.map((cartItem) => {
//       const quantity =
//         cartItem.id === product.id ? cartItem.quantity + 1 : cartItem.quantity;
//       const total =
//         cartItem.id === product.id
//           ? cartItem.price * quantity
//           : cartItem.quantity * cartItem.price;
//       return {
//         id: cartItem.id,
//         name: cartItem.name,
//         imageUrl: cartItem.imageUrl,
//         price: cartItem.price,
//         quantity,
//         total,
//       };
//     });
//   }

//   //new item
//   return [
//     ...cartItems,
//     {
//       ...product,
//       quantity: 1,
//       total: product.price,
//     },
//   ];
// };

// const decreaseItemQuantity = (cartItems, cartItem) => {
//   //if existing item, increase total and quantity
//   let cartItemIndex = cartItems.findIndex((item) => item.id === cartItem.id);

//   if (cartItemIndex == null || cartItemIndex === -1) {
//     return;
//   }
//   if (cartItems[cartItemIndex].quantity === 1) {
//     return removeItemFromCart(cartItems, cartItem);
//   }

//   cartItems[cartItemIndex].quantity--;
//   cartItems[cartItemIndex].total =
//     cartItems[cartItemIndex].price * cartItems[cartItemIndex].quantity;

//   return [...cartItems];
// };

// const removeItemFromCart = (cartItems, cartItem) => {
//   const itemExists = cartItems.find((item) => item.id === cartItem.id);
//   if (itemExists) {
//     return cartItems.filter((item) => item.id !== cartItem.id);
//   }
// };

// const updateCartTotal = (cartItems) => {
//   const total = cartItems.reduce((total, item) => item.total + total, 0);
//   return total;
// };

// const updateCartCount = (cartItems) => {
//   const newCartCount = cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );
//   return newCartCount;
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setCartOpen: () => {},
//   cartItems: [],
//   addToCart: () => {},
//   decreaseQuantity: () => {},
//   removeCartItem: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);
// const [isCartOpen, setIsCartOpen] = useState(false);
// const [cartItems, setCartItems] = useState([]);
// const [cartCount, setCartCount] = useState(0);
// const [cartTotal, setCartTotal] = useState(0);

// useEffect(() => {
//   // const newCartCount = cartItems.reduce(
//   //   (total, cartItem) => total + cartItem.quantity,
//   //   0
//   // );
//   // setCartCount(newCartCount);

//   // //cart total
//   // if (cartItems.length === 0) {
//   //   setCartTotal(0);
//   //   return;
//   // }

//   // const total = cartItems.reduce((total, item) => item.total + total, 0);
//   // setCartTotal(total);
//   dispatch({ type: "SET_CART_COUNT" });
//   dispatch({ type: "SET_CART_TOTAL" });
// }, [cartItems]);

// const addToCart = (product) => {
//   const newCartItems = addItemToCart(cartItems, product);
//   updateCartItemsReducer(newCartItems);
// };

// const decreaseQuantity = (cartItem) => {
//   const newCartItems = decreaseItemQuantity(cartItems, cartItem);
//   updateCartItemsReducer(newCartItems);
// };

// const removeCartItem = (cartItem) => {
//   const newCartItems = removeItemFromCart(cartItems, cartItem);
//   updateCartItemsReducer(newCartItems);
// };

//   const setCartOpen = (value) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, value));
//   };

//   //main function to update state
//   const updateCartItemsReducer = (newCartItems = []) => {
//     const cartTotalPrice = updateCartTotal(newCartItems);
//     const cartCount = updateCartCount(newCartItems);
//     const payload = {
//       cartItems: newCartItems,
//       cartTotal: cartTotalPrice,
//       cartCount,
//     };
//     dispatch(createAction(CART_ACTION_TYPES.SET_CART, payload));
//   };
//   const value = {
//     isCartOpen,
//     setCartOpen,
//     cartItems,
//     addToCart,
//     cartCount,
//     decreaseQuantity,
//     removeCartItem,
//     cartTotal,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
