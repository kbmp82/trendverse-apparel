import React, { useContext } from "react";
import "./product-card.scss";
import { CartContext } from "../../context/cart.context";

//components
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addToCart(product);
  };
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
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.atc}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
