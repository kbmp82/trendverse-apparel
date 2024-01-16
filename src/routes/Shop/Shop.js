import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsPreview from "../CollectionsPreview/CollectionsPreview";
import Collection from "../Collection/Collection";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CollectionsPreview />} />
      <Route path=":collection" element={<Collection />} />
    </Routes>
  );
}
