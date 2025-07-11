"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function ComponentsPagination({
  totalPages,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-4">
      {/* ไปหน้าแรก */}
      <button
        onClick={() => goToPage(1)}
        className="btn btn-md btn-circle bg-base-100 border border-base-300 text-base-content"
        disabled={currentPage === 1}
      >
        <ChevronsLeft className="w-4 h-4" />
      </button>

      {/* หน้าก่อนหน้า */}
      <button
        onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
        className="btn btn-md btn-circle bg-base-100 border border-base-300 text-base-content"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* ตัวเลขหน้า */}
      {getPageNumbers().map((p, index) =>
        p === "..." ? (
          <span key={index} className="text-base-content/50 px-2">
            …
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(p as number)}
            className={`btn btn-md btn-circle ${
              currentPage === p
                ? "bg-primary text-white"
                : "bg-base-100 border border-base-300 text-base-content"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* หน้าถัดไป */}
      <button
        onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
        className="btn btn-md btn-circle bg-base-100 border border-base-300 text-base-content"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* ไปหน้าสุดท้าย */}
      <button
        onClick={() => goToPage(totalPages)}
        className="btn btn-md btn-circle bg-base-100 border border-base-300 text-base-content"
        disabled={currentPage === totalPages}
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    </div>
  );
}
