import React from "react";
import "./collection_preview.scss";
import { Link } from "react-router-dom";

import ProductCard from "../Products/ProductCard";

export default function CollectionPreview({ title, products }) {
  return (
    <div className="collection-container">
      <h1>
        <span className="collection__title">
          <Link to={`/shop/${title}`} className="collection__title-link">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Link>
        </span>
      </h1>
      <div className="collection__products">
        {products
          .filter((_, id) => id < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
