import { createContext, useEffect, useState } from "react";
//import SHOP_DATA from "../shopdata.js";
import {
  addCollectionAndDocuments,
  getCollectionsAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CollectionsContext = createContext({
  collectionsMap: {},
});

export const CollectionsProvider = ({ children }) => {
  const [collectionsMap, setCollectionsMap] = useState({});
  const value = { collectionsMap, setCollectionsMap };

  // useEffect(() => {
  //   addCollectionAndDocuments("collections", SHOP_DATA);
  // }, []);

  useEffect(() => {
    (async () => {
      const collectionMap = await getCollectionsAndDocuments();
      setCollectionsMap(collectionMap);
    })();
  }, []);

  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
};
