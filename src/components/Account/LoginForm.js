import React from "react";
import FormInput from "../FormInput/FormInput";
import { useImmer } from "use-immer";
import Button from "../Button/Button";

export default function LoginForm() {
  const [state, setState] = useImmer({
    email: "",
    password: "",
  });
  function setFormField(e) {
    const { name, value } = e.target;
    setState((draft) => {
      draft[name] = value;
    });
  }
  return (
    <div className="account__login">
      <h1>I already have an account</h1>
      <p>Sign in</p>
      <form>
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
          label=""
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
    </div>
  );
}
