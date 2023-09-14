import React from "react";
import "./cart-item.scss";
export default function CartItem({ product }) {
  return (
    <div className="cart-dropdown__item">
      <img src={product.imageUrl} alt={product.name} />
      <div className="cart-dropdown__item-details">
        <span className="cart-dropdown__item-name">{product.name}</span>
        <div className="cart-dropdown__item-price-wrapper">
          <span className="cart-dropdown__item-quantity">
            {product.quantity}
          </span>{" "}
          x <span className="cart-dropdown__item-price">${product.price}</span>{" "}
          <span className="cart-dropdown__item-total">${product.total}</span>
        </div>
      </div>
    </div>
  );
}
