import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryGridContainer } from "./categories.styles";

export default function CategoryGrid({ categories }) {
  return (
    <CategoryGridContainer>
      {categories.map((item, index) => {
        return <CategoryCard key={index} item={item} />;
      })}
    </CategoryGridContainer>
  );
}
