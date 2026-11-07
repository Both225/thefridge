"use client";

import Link from "next/link";

import AuthForm from "../../_components/AuthForm";
import AuthInput from "../../_components/AuthInput";
import LoginButton from "./LoginButton";

function LoginFormContainer() {
  function onChange(e) {
    console.log(e);
  }

  return (
    <div className="space-y-3 flex flex-col">
      <AuthForm>
        <AuthInput
          label={"Email"}
          placeholder={"Email address"}
          onChange={onChange}
        />
        <AuthInput
          label={"Password"}
          placeholder={"Password"}
          type="password"
          onChange={onChange}
          hasLink={true}
        />
        <LoginButton text={"Login"} />
      </AuthForm>
      <p className="text-weak text-[1.4rem] text-center">OR</p>
      <LoginButton text={"Login with Google"} primary={false} />
      <SignUpSection />
    </div>
  );
}

export default LoginFormContainer;

function SignUpSection() {
  return (
    <p className="text-weak text-[1.4rem] text-center">
      Don&apos;t have account?{" "}
      <span>
        <Link href={""} className="text-primary underline">
          Sign up
        </Link>
      </span>
    </p>
  );
}
