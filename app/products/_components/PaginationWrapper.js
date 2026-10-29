"use client";

import { useState } from "react";
import Pagination from "../../_components/ui/Pagination";

export default function PaginationWrapper({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);

    // Later, use this value to fetch the selected page's products.
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
