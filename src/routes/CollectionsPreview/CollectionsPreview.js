//import React, { useEffect, useState } from "react";
import Page from "../../components/Layout/Page";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";
import { getCollections } from "../../store/collections/collection.selector";

export default function CategoriesPreview() {
  const collectionsMap = useSelector(getCollections);
  //const [collections, setCollections] = useState({});

  // useEffect(() => {
  //   setCollections(collectionsMap);
  // }, [collectionsMap]);

  return (
    <Page title="Products">
      {Object.keys(collectionsMap).map((title, index) => {
        return (
          <CollectionPreview
            key={index}
            title={title}
            products={collectionsMap[title]}
          />
        );
      })}
    </Page>
  );
}
