import React from "react";
import "./input.scss";
export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="form__group">
      <input {...otherProps} className="form__input" />
      {label && label.length && (
        <label
          className={`${
            otherProps.value.length > 0 && "shrink"
          } form__input-label`}
          htmlFor="displayName"
        >
          {label}
        </label>
      )}
    </div>
  );
}
