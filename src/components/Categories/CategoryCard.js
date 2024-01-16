import React from "react";
import {
  CategoryContent,
  CategoryCTA,
  CategoryImage,
  Category,
} from "./categories.styles";
export default function Card({ item }) {
  return (
    <Category className={"category--" + item.size}>
      <div className="category__wrapper">
        <CategoryImage src={item.image} alt={item.title} />
        <CategoryContent>
          <p className="category__title">{item.title}</p>
          <CategoryCTA>shop now</CategoryCTA>
        </CategoryContent>
      </div>
    </Category>
  );
}
