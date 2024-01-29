import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsPreview from "../CollectionsPreview/CollectionsPreview";
import Collection from "../Collection/Collection";
//import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCollectionsAsync } from "../../store/collections/collection.action";
import { useDispatch } from "react-redux";
//import { setCollections } from "../../store/collections/collection.action";

export default function Shop() {
  const dispatch = useDispatch();

  //initiate collections

  useEffect(() => {
    dispatch(fetchCollectionsAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CollectionsPreview />} />
      <Route path=":collection" element={<Collection />} />
    </Routes>
  );
}
