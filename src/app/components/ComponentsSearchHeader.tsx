"use client";
import { useState } from "react";

interface Props {
  totalResults: number;
  status: string;
  sort: string;
  onStatusChange: (val: string) => void;
  onSortChange: (val: string) => void;
}

export default function ComponentsSearchHeader({
  totalResults,
  status,
  sort,
  onStatusChange,
  onSortChange,
}: Props) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [selectedSort, setSelectedSort] = useState(sort);

  return (
    <div className="  bg-base-100 shadow-sm rounded-box px-5 py-1 flex flex-col md:flex-row justify-between items-start md:items-center ">
      {/* ซ้าย: จำนวนผลลัพธ์ */}
      <p className="text-sm text-base-content/80 font-medium">
        {totalResults} Search results
      </p>

      {/* ขวา: ตัวเลือก */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-base-content">
            Status:
          </span>
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              onStatusChange(e.target.value);
            }}
            className="select select-sm select-bordered border-base-300 text-sm"
          >
            <option>All Status</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-6 bg-base-300" />

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-base-content">
            Sort by:
          </span>
          <select
            value={selectedSort}
            onChange={(e) => {
              setSelectedSort(e.target.value);
              onSortChange(e.target.value);
            }}
            className="select select-sm select-bordered border-base-300 text-sm"
          >
            <option>Featured All</option>
            <option>Price ↑</option>
            <option>Price ↓</option>
            <option>Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
