import React from "react";
import { useImmer } from "use-immer";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

export default function SignUpForm({ onClick }) {
  const [state, setState] = useImmer({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function setFormField(e) {
    const { name, value } = e.target;
    setState((draft) => {
      draft[name] = value;
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formElements = e.target.elements;
    if (
      formElements.password.value.length < 10 ||
      formElements.confirmPassword.value.length < 10
    ) {
      console.log(
        "password must be a minimum of 10 characters",
        formElements.password.value.length
      );
      return;
    }
    if (formElements.password.value !== formElements.confirmPassword.value) {
      console.log("passwords dont match");
      return;
    }

    //submit form
    try {
      const res = await createAuthUserWithEmailAndPassword(
        state.email,
        state.password,
        state.displayName
      );
      console.log(res);
      setState(() => {
        return {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
      });
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        console.log("user already exists");
      }
      console.log(error);
    }
  }
  return (
    <div className="account__signup">
      <h1>I need an account</h1>
      <p>Sign up with your email and password.</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="displayName"
          type="text"
          name="displayName"
          required
          onChange={setFormField}
          value={state.displayName}
        />
        <FormInput
          label="Email"
          id="newEmail"
          type="email"
          name="email"
          required
          onChange={setFormField}
          value={state.email}
        />
        <FormInput
          label="Password"
          id="newPassword"
          type="password"
          name="password"
          required
          onChange={setFormField}
          value={state.password}
        />
        <FormInput
          label="Confirm Password"
          id="newConfirmPassword"
          type="password"
          name="confirmPassword"
          required
          onChange={setFormField}
          value={state.confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <hr className="separator" />
      <Button buttonType="google" onClick={onClick}>
        <img src="/google.svg" alt="Google login button" />
        Sign up with Google
      </Button>
    </div>
  );
}
