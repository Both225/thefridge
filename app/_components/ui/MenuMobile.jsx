"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "All Groceries", href: "/products" },
  { label: "Meat & Seafood", href: "/products?category=meat-seafood" },
  {
    label: "Vegetables & Fruits",
    href: "/products?category=vegetables-fruits",
  },
  { label: "Canned Food", href: "/products?category=canned-food" },
  { label: "Offers", href: "/products?category=offers" },
];

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="rounded-md p-2 hover:bg-white/10"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-[28rem] max-w-[85vw] flex-col bg-white text-[#252B27] shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5">
          <span className="text-[2rem] font-semibold text-[#145A3A]">
            TheFridge
          </span>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="rounded-md p-2 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeSidebar}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-[1.6rem] transition-colors hover:bg-[#145A3A]/10 hover:text-[#145A3A]"
                >
                  {item.label}
                  <ChevronRight size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="border-t border-gray-200 p-5">
          <Link
            href="/cart"
            onClick={closeSidebar}
            className="block rounded-lg bg-[#145A3A] px-4 py-3 text-center text-[1.6rem] font-medium text-white hover:bg-[#10482E]"
          >
            View Cart
          </Link>
        </div>
      </aside>
    </>
  );
}
