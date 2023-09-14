import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import { CartContext } from "../../context/cart.context";
import Page from "../../components/Layout/Page";
import ProductCard from "../../components/Products/ProductCard";
import "../../components/Products/product-card.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <Page title="Products">
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              setCartItem={setCartItems}
            />
          );
        })}
      </div>
    </Page>
  );
}
