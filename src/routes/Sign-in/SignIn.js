import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
      <h1>Sign in page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in
      </button>
    </>
  );
}
