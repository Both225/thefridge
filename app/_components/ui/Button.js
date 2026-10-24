"use client";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-4 py-2 text-[1.4rem] font-medium bg-primary text-white rounded-lg hover:bg-primary-strong transition-colors duration-150"
    >
      {children}
    </button>
  );
}

export default Button;
