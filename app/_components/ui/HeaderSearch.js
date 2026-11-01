"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    router.push(`/products?search=${encodeURIComponent(value)}`);

    setSearch("");
    setIsOpen(false);
  }

  return (
    <>
      {/* Search Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open product search"
        aria-expanded={isOpen}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Search size={22} />
      </button>

      {/* Search Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/40"
        >
          {/* Search Field */}
          <div
            className="absolute top-25 left-1/2 -translate-x-1/2 w-[90%] max-w-[50rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-xl text-strong"
            >
              <Search size={22} className="shrink-0 text-t-weak" />

              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search all products..."
                aria-label="Search all products"
                className="w-full bg-transparent text-base outline-none placeholder:text-t-weak"
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
                className="shrink-0 text-t-weak hover:text-primary"
              >
                <X size={22} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderSearch;
