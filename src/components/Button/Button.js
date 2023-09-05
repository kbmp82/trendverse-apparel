import React from "react";
import "./button.scss";

export default function Button({ children, buttonType, onClick }) {
  const BUTTON_TYPE_CLASSES = {
    google: "google-button",
    inverted: "inverted-button",
  };

  return (
    <button
      className={`${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : "standard"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
