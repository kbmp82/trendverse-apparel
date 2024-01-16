import React, { useContext, useEffect, useState } from "react";
import { CollectionsContext } from "../../context/collections.context";
import Page from "../../components/Layout/Page";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

export default function CategoriesPreview() {
  const { collectionsMap } = useContext(CollectionsContext);
  const [collections, setCollections] = useState({});

  useEffect(() => {
    setCollections(collectionsMap);
  }, [collectionsMap]);

  return (
    <Page title="Products">
      {Object.keys(collections).map((title, index) => {
        return (
          <CollectionPreview
            key={index}
            title={title}
            products={collections[title]}
          />
        );
      })}
    </Page>
  );
}
