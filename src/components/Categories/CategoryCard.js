import React from "react";
import {
  CategoryContent,
  CategoryCTA,
  CategoryImage,
  Category,
} from "./categories.styles";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  return (
    <Category className={"category--" + item.size}>
      <div className="category__wrapper">
        <CategoryImage src={item.image} alt={item.title} />
        <CategoryContent>
          <p className="category__title">{item.title}</p>
          <CategoryCTA onClick={() => navigate(item.route)}>
            shop now
          </CategoryCTA>
        </CategoryContent>
      </div>
    </Category>
  );
}
