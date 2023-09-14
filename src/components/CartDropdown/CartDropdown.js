import React, { useContext } from "react";
import "./cart-dropdown.scss";

import { CartContext } from "../../context/cart.context";

//components
import Button from "../Button/Button";
export default function CartDropdown({ open }) {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className={"cart-dropdown" + (open ? " active" : "")}>
      <div className="cart-dropdown__header">
        You have {cartItems.length} items in your cart
      </div>
      <div className="cart-dropdown__items">
        {cartItems.map((product) => {
          return (
            <div key={product.id} className="cart-dropdown__item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="cart-dropdown__item-details">
                <span className="cart-dropdown__item-name">{product.name}</span>
                <span className="cart-dropdown__item-quantity">1</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-dropdown__footer">
        <Button>Go To Checkout</Button>
      </div>
    </div>
  );
}
