import React, { useContext, useEffect, useState } from "react";
import Page from "../../components/Layout/Page";
//import { CartContext } from "../../context/cart.context";
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

export default function Checkout() {
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <Page title="Checkout">
      <div className="checkout">
        <div className="checkout__header grid">
          <span></span>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total Price</span>
          <span></span>
        </div>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CheckoutItem item={item} key={item.id} />;
          })}
        <div className="checkout__footer">
          <span className="total">Total: ${cartTotal}</span>
        </div>
      </div>
    </Page>
  );
}
