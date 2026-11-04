function AuthLayout({ children }) {
  return (
    <main className="h-screen bg-primary-light -my-8 -mx-4 flex justify-center items-center">
      {children}
    </main>
  );
}

export default AuthLayout;
