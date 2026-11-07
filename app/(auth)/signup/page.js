import Logo from "@/app/_components/ui/Logo";

import SignUpFormContainer from "./_components/SignUpFormContainer";
import Title from "@/app/_components/ui/Title";

function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-lg space-y-6">
      <Logo colour={true} />
      <div className="self-start">
        <Title text={"Create an account"} />
      </div>
      <SignUpFormContainer />
    </div>
  );
}

export default SignUpPage;
