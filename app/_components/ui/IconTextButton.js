"use client";

import { ShoppingCart, SlidersHorizontal, ArrowUpDown } from "lucide-react";

const icons = {
  shoppingCart: ShoppingCart,
  filter: SlidersHorizontal,
  sortBy: ArrowUpDown,
};

export default function IconTextButton({
  text,
  iconName,
  iconPosition = "left",
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const Icon = icons[iconName];

  const variants = {
    primary: "bg-[#145A3A] text-white hover:bg-[#10482E]",
    secondary: "bg-[#E8F0EB] text-[#145A3A] hover:bg-[#DCE8DF]",
    outline: "border border-[#145A3A] text-[#145A3A] hover:bg-[#F0F5F1]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-[1.4rem] font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
        variants[variant] ?? variants.primary
      } ${className}`}
    >
      {iconPosition === "left" && <Icon size={18} aria-hidden="true" />}

      <span>{text}</span>

      {iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </button>
  );
}
