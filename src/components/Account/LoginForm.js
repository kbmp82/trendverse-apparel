import React, { useContext, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import { UserContext } from "../../context/user.context";
import { useImmer } from "use-immer";
import {
  auth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//components
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

export default function LoginForm() {
  const { setCurrentUser } = useContext(UserContext);
  const [state, setState] = useImmer({
    email: "",
    password: "",
  });

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  function setFormField(e) {
    const { name, value } = e.target;
    setState((draft) => {
      draft[name] = value;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formElements = e.target.elements;
    //submit form
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        state.email,
        state.password
      );

      //clear forms
      setState(() => {
        return {
          email: "",
          password: "",
        };
      });
    } catch (error) {
      if (error.code == "auth/wrong-password") {
        console.log("wrong password");
      } else if (error.code == "auth/user-not-found") {
        console.log("user not found");
      }
      console.log(error);
    }
  }
  return (
    <div className="account__login">
      <h1>I already have an account</h1>
      <p>Sign in</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          required
          onChange={setFormField}
          value={state.email}
        />
        <FormInput
          label="Password"
          onChange={setFormField}
          value={state.password}
          id="password"
          type="password"
          name="password"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
      <hr className="separator" />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.google}
        onClick={signInWithGoogle}
      >
        <img src="/google.svg" alt="Google login button" />
        Sign in with Google
      </Button>
    </div>
  );
}
