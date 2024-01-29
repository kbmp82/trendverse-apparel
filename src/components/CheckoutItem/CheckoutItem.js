import React, { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../context/cart.context";
import {
  decreaseQuantity,
  addToCart,
  removeCartItem,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutItem({ item }) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="checkout__item grid">
      <img src={item.imageUrl} alt={item.name} />
      <span className="checkout__item-name">{item.name}</span>
      <div className="checkout__quantity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => {
            dispatch(decreaseQuantity(cartItems, item));
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>

        <span className="checkout__item-quantity">{item.quantity}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => {
            dispatch(addToCart(cartItems, item));
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <span className="checkout__item-price">${item.price}</span>
      <span className="checkout__item-total">${item.total}</span>
      <span className="remove">
        <svg
          onClick={() => {
            dispatch(removeCartItem(cartItems, item));
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.3}
          stroke="currentColor"
          className="w-1 h-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </span>
    </div>
  );
}
