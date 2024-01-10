import React, { useContext, useEffect, useState } from "react";
import Page from "../../components/Layout/Page";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

export default function Checkout() {
  const { cartItems, updateCart, cartTotal } = useContext(CartContext);

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
            return (
              <CheckoutItem item={item} key={item.id} updateCart={updateCart} />
            );
          })}
        <div className="checkout__footer">
          <span className="total">Total: ${cartTotal}</span>
        </div>
      </div>
    </Page>
  );
}
