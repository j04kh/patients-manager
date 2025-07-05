import type { Patient } from "../patients/types";

interface Props {
  data: Patient[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

export default function Pagination({ data, currentPage, totalPages, nextPage, prevPage }: Props) {
  const start = (currentPage - 1) * 20 + 1;
  const end = Math.min(currentPage * 20, data.length);

  return (
    <nav className="mt-auto mr-2 flex items-center justify-between border-t border-gray-200 py-3 sm:mr-3 sm:px-3">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{start} </span>
          to <span className="font-medium">{end} </span>
          results
        </p>
      </div>
      <div className="flex flex-1 justify-between gap-2 sm:justify-end">
        <button
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          type="button"
          onClick={() => prevPage()}
          className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-3 py-2 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="text-sm">Previous</span>
        </button>
        <button
          disabled={currentPage === totalPages}
          aria-disabled={currentPage === totalPages}
          type="button"
          onClick={() => nextPage()}
          className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-3 py-2 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="text-sm">Next</span>
        </button>
      </div>
    </nav>
  );
}
