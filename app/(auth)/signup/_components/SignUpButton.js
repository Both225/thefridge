function SignUpButton({ text, onClick, primary = true }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`cursor-pointer text-[1.4rem] font-medium ${primary ? "bg-primary hover:bg-primary-strong text-white" : "bg-white text-strong border-2 border-stroke-weak"}  rounded-lg  transition-colors duration-150 w-full px-4 py-2`}
    >
      {text}
    </button>
  );
}

export default SignUpButton;
