"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

const categories = [
  { value: "meat", label: "Meat" },
  { value: "fish-seafood", label: "Fish & Seafood" },
  { value: "vegetable", label: "vegetables" },
  { value: "fruit", label: "fruits" },
  { value: "dairy", label: "Dairy" },
  { value: "canned", label: "Canned Food" },
];

export default function FilterBottomSheet({ onApply, selectedFilters = {} }) {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState({
    categories: selectedFilters.categories || [],
    minPrice: selectedFilters.minPrice || "",
    maxPrice: selectedFilters.maxPrice || "",
    sort: selectedFilters.sort || "default",
  });

  function toggleCategory(category) {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((item) => item !== category)
        : [...prev.categories, category],
    }));
  }

  function clearFilters() {
    setFilters({
      categories: [],
      minPrice: "",
      maxPrice: "",
      sort: "default",
    });
  }

  function applyFilters() {
    onApply?.(filters);
    setIsOpen(false);
  }

  return (
    <>
      {/* Filter button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 w-56"
      >
        <SlidersHorizontal size={18} />
        Filter
      </button>

      {/* Bottom sheet */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/40"
          onClick={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)] rounded-t-2xl bg-white pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2
                id="filter-title"
                className="text-lg font-semibold text-gray-900"
              >
                Filter products
              </h2>

              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="max-h-[65dvh] space-y-6 overflow-y-auto px-5 py-5">
              {/* Categories */}
              <div>
                <h3 className="mb-3 font-semibold text-gray-900">Categories</h3>

                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <label
                      key={category.value}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category.value)}
                        onChange={() => toggleCategory(category.value)}
                        className="size-4 accent-[#145A3A]"
                      />
                      {category.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="mb-3 font-semibold text-gray-900">
                  Price range ($)
                </h3>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="0"
                    placeholder="Min price"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        minPrice: e.target.value,
                      }))
                    }
                    className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#145A3A]"
                  />

                  <span className="text-gray-400">–</span>

                  <input
                    type="number"
                    min="0"
                    placeholder="Max price"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        maxPrice: e.target.value,
                      }))
                    }
                    className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-[#145A3A]"
                  />
                </div>
              </div>

              {/* Sorting */}
              <div>
                <h3 className="mb-3 font-semibold text-gray-900">Sort by</h3>

                <div className="space-y-3">
                  {[
                    ["default", "Recommended"],
                    ["price-asc", "Price: Low to high"],
                    ["price-desc", "Price: High to low"],
                    ["name-asc", "Name: A to Z"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <input
                        type="radio"
                        name="sort"
                        value={value}
                        checked={filters.sort === value}
                        onChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            sort: value,
                          }))
                        }
                        className="size-4 accent-[#145A3A]"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 border-t border-gray-100 px-5 pt-4">
              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800"
              >
                Clear all
              </button>

              <button
                type="button"
                onClick={applyFilters}
                className="flex-1 rounded-lg bg-[#145A3A] px-4 py-3 text-sm font-semibold text-white"
              >
                Apply filters
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
