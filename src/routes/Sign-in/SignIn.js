import React from "react";
import Page from "../../components/Layout/Page";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Page>
      <h1>Sign in page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in
      </button>
    </Page>
  );
}
