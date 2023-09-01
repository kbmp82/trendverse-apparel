import React from "react";

export default function Card({ item }) {
  return (
    <div className={"category category--" + item.size}>
      <div className="category__wrapper">
        <img src={item.image} alt={item.title} />
        <div className="category__content">
          <p className="category__title">{item.title}</p>
          <p className="category__cta">shop now</p>
        </div>
      </div>
    </div>
  );
}
