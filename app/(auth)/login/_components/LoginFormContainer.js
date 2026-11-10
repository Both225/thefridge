"use client";

import Link from "next/link";

import { createClient } from "@/app/_lib/supabase/client";

import AuthForm from "../../_components/AuthForm";
import AuthInput from "../../_components/AuthInput";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginFormContainer() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    router.push("/");

    console.log("Loggin User: ", data);
  }

  return (
    <div className="space-y-3 flex flex-col">
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput
          value={email}
          label={"Email"}
          placeholder={"Email address"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          value={password}
          label={"Password"}
          placeholder={"Password"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
