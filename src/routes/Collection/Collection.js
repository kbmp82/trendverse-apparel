import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CollectionsContext } from "../../context/collections.context";
import Page from "../../components/Layout/Page";
import "../../components/CollectionPreview/collection_preview.scss";
import ProductCard from "../../components/Products/ProductCard";

export default function Collection() {
  const { collection } = useParams();
  const { collectionsMap } = useContext(CollectionsContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!Object.keys(collectionsMap).length > 0) return;
    setProducts(collectionsMap[collection]);
  }, [collectionsMap, collection]);
  return (
    <Page title={collection}>
      <div className="collection-container">
        <h1>
          <span className="collection__title">
            {collection.charAt(0).toUpperCase() + collection.slice(1)}
          </span>
        </h1>

        <div className="collection__products">
          {products.map((product) => {
            console.log(product);
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </Page>
  );
}
