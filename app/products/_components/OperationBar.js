"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterBottomSheet from "./FilterBottomSheet";

function OperationBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleFilterApply(filters) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", 1);

    params.delete("category");

    if (filters.categories.length > 0) {
      params.set("category", filters.categories.join(","));
    }

    if (filters.minPrice) {
      params.set("minPrice", filters.minPrice);
    } else {
      params.delete("minPrice");
    }

    if (filters.maxPrice) {
      params.set("maxPrice", filters.maxPrice);
    } else {
      params.delete("maxPrice");
    }

    if (filters.sort !== "default") {
      params.set("sort", filters.sort);
    } else {
      params.delete("sort");
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <section className="flex">
      <FilterBottomSheet onApply={handleFilterApply} />
    </section>
  );
}

export default OperationBar;
