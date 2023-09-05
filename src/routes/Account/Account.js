import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Page from "../../components/Layout/Page";
import "./account.scss";
import SignUpForm from "../../components/Account/SignUpForm";
import LoginForm from "../../components/Account/LoginForm";

// if logged in render account page, else render signup / signup page
export default function Account() {
  return (
    <Page>
      <div className="account">
        <LoginForm />
        <SignUpForm />
      </div>
    </Page>
  );
}
