import Logo from "@/app/_components/ui/Logo";

import LoginFormContainer from "./_components/LoginFormContainer";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-lg space-y-6">
      <Logo colour={true} />
      <LoginFormContainer />
    </div>
  );
}

export default LoginPage;
