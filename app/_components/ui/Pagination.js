"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage = 1,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const buttonStyle =
    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${buttonStyle} hover:bg-gray-100`}
      >
        <ChevronLeft size={20} />
      </button>

      <span
        aria-current="page"
        className="text-[1.4rem] font-medium text-strong"
      >
        {currentPage}
      </span>

      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${buttonStyle} hover:bg-gray-100`}
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
}
