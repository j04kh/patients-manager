import { useMemo, useState } from "react";

/*
 * A custom React hook for handling client-side pagination.
 * Accepts a dataset and returns the current page's data slice,
 * pagination controls, and metadata such as the total number of pages.
 */ 
export function usePagination<T>(data: T[]) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));
  const goToPage = (page: number) => setCurrentPage(() => Math.max(1, Math.min(page, totalPages)));

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  };
}