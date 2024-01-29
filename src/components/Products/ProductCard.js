import React, { useContext } from "react";
import "./product-card.scss";
//import { CartContext } from "../../context/cart.context";
import { addToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

//components
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addToCart(cartItems, product));
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
