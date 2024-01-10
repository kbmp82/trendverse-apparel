import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.scss";

import { CartContext } from "../../context/cart.context";

//components
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import CartCount from "../CartCount/CartCount";

export default function CartDropdown({ open, setCartOpen }) {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.addEventListener("click", handleCartDrawerClose);
      }, 500);
    }

    return () => {
      document.removeEventListener("click", handleCartDrawerClose);
    };
  }, [open]);

  function handleCartDrawerClose(e) {
    const className = e.target.classList && e.target.classList[0];
    if (!className || className.indexOf("cart-dropdown") == -1) {
      setCartOpen(false);
    }
  }

  const handleCheckoutNavigation = (e) => {
    handleCartDrawerClose(e);
    navigate("/checkout");
  };

  return (
    <div className={"cart-dropdown" + (open ? " active" : "")}>
      <div className="cart-dropdown__header">
        You have{" "}
        <span className="cart-dropdown__quantity">
          <CartCount />
        </span>{" "}
        {cartItems.length === 1 ? "item" : "items"} in your cart
      </div>
      <div className="cart-dropdown__items">
        {cartItems.length > 0 &&
          cartItems.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
      </div>
      <div className="cart-dropdown__footer">
        <Button onClick={handleCheckoutNavigation}>Go To Checkout</Button>
      </div>
    </div>
  );
}
