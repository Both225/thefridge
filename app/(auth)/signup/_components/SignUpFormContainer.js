"use client";

import AuthForm from "../../_components/AuthForm";
import AuthInput from "../../_components/AuthInput";

import SignUpButton from "./SignUpButton";

function SignUpFormContainer() {
  function onChange(e) {
    console.log(e);
  }

  return (
    <div className="space-y-3 flex flex-col">
      <AuthForm>
        <AuthInput placeholder={"Name"} onChange={onChange} />
        <AuthInput placeholder={"Email address"} onChange={onChange} />
        <AuthInput
          placeholder={"Password"}
          type="password"
          onChange={onChange}
        />
        <AuthInput
          type="password"
          placeholder={"Re-password"}
          onChange={onChange}
        />
        <SignUpButton text={"Sign up"} />
      </AuthForm>
      <p className="text-weak text-[1.4rem] text-center">OR</p>
      <SignUpButton text={"Login with Google"} primary={false} />
    </div>
  );
}

export default SignUpFormContainer;
