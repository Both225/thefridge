"use client";

import { useState } from "react";
import Pagination from "../../_components/ui/Pagination";

import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationWrapper({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  function onPageChange(page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page || 1);
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}
