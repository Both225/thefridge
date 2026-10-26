"use client";

function Button({ children, onClick, size = "md" }) {
  const sizes = {
    sm: "px-2 py-2",
    md: "px-4 py-2",
    lg: "px-8 py-2",
  };
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-[1.4rem] font-medium bg-primary text-white rounded-lg hover:bg-primary-strong transition-colors duration-150 ${sizes[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
