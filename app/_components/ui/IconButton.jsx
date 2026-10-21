"use client";

import { Plus, Heart, Search, ShoppingCart, Menu } from "lucide-react";

const icons = {
  plus: Plus,
  heart: Heart,
  search: Search,
  cart: ShoppingCart,
  menu: Menu,
};

export default function IconButton({
  iconName = "plus",
  onClick,
  label,
  variant = "default",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const Icon = icons[iconName] || Plus;
  const variants = {
    default: "bg-white text-[#252B27] hover:bg-gray-100",
    primary: "bg-[#145a3a] text-white hover:bg-primary-[#145a3acc]",
    outline: "border border-[#D1D5DB] text-[#252B27] hover:bg-gray-100",
    ghost: "text-[#252B27] hover:bg-gray-100",
  };

  const sizes = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`
        inline-flex shrink-0 items-center justify-center
        rounded-lg transition-colors duration-200 hover:bg-primary-strong cursor-pointer
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#145A3A] focus-visible:ring-offset-2
        ${variants[variant] ?? variants.default}
        ${sizes[size] ?? sizes.md}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={20} aria-hidden="true" />}
    </button>
  );
}
