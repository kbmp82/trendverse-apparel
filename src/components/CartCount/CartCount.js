//replaced with redux

// import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../../context/cart.context";

// export default function CartCount() {
//   const { cartItems } = useContext(CartContext);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let cartTotal = cartItems.reduce((total, cartItem) => {
//       return total + cartItem.quantity;
//     }, 0);
//     setCount(cartTotal);
//   }, [cartItems]);
//   return <>{count}</>;
// }
