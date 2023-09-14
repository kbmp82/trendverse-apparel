import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import Page from "../../components/Layout/Page";
import ProductCard from "../../components/Products/ProductCard";
import "../../components/Products/product-card.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <Page title="Products">
      <div className="products">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </Page>
  );
}
