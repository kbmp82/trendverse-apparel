import React from "react";
import { DefaultButton, GoogleSignInButton, ATCButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  google: "google",
  default: "default",
  atc: "add-to-cart",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.atc]: ATCButton,
  }[buttonType]);

export default function Button({ children, buttonType, onClick }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
}
