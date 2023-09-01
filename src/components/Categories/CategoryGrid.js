import React from "react";
import CategoryCard from "./CategoryCard";
import "./categories.scss";

export default function CategoryGrid({ categories }) {
  return (
    <div className="category-grid">
      {categories.map((item, index) => {
        return <CategoryCard key={index} item={item} />;
      })}
    </div>
  );
}
