import React from "react";
import { FormGroup, FormInputBox, FormInputLabel } from "./input.styles";
export default function FormInput({ label, ...otherProps }) {
  return (
    <FormGroup>
      <FormInputBox {...otherProps} />
      {label && label.length && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor="displayName">
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
}
