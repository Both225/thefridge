"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[1.6rem] font-medium">{title}</span>

        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-4 text-[1.4rem] text-gray-600">{children}</div>
      )}
    </div>
  );
}
