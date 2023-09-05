import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Page from "../../components/Layout/Page";
import "./account.scss";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/Account/SignUpForm";
import LoginForm from "../../components/Account/LoginForm";

export default function SignIn() {
  //useEffect  - for use with signInWithGoogleRedirect
  //   useEffect(() => {
  //     (async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     })();
  //   }, []);

  //   const logGoogleRedirectUser = async () => {
  //     signInWithGoogleRedirect();
  //   };
  //other sign-in option for no redirect
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      const userDocRef = await createUserDocumentFromAuth(user);
    }
  };

  return (
    <Page>
      <div className="account">
        <LoginForm />
        <SignUpForm onClick={logGoogleUser} />
      </div>
    </Page>
  );
}
