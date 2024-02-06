import React from "react";
import {
  DefaultButton,
  GoogleSignInButton,
  ATCButton,
  PaymentButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  google: "google",
  default: "default",
  atc: "add-to-cart",
  payment: "payment",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.atc]: ATCButton,
    [BUTTON_TYPE_CLASSES.payment]: PaymentButton,
  }[buttonType]);

export default function Button({ children, buttonType, onClick, isLoading }) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} onClick={onClick}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
}
