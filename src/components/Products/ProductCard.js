import React from "react";
import "./product-card.scss";
import Button from "../Button/Button";

export default function ProductCard({ product, setCartItem, cartItems }) {
  function addItemToCart() {
    console.log("add to cart", {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
    });
    setCartItem([
      ...cartItems,
      {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
      },
    ]);
  }

  return (
    <div className="product-card">
      <div className="product">
        <div className="product__image-container">
          <img className="product__image" src={product.imageUrl} />
        </div>
        <div className="product__details">
          <span className="product__name">{product.name}</span>
          <span className="prouct__price">{product.price}</span>
        </div>
        <Button onClick={addItemToCart} buttonType="atc">
          Add to cart 2
        </Button>
      </div>
    </div>
  );
}
