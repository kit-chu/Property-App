"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

interface Props {
  onSearchChange?: (text: string) => void;
  onToggleAdvanced?: () => void;
}

export default function ComponentsSearchFilter({
  onSearchChange,
  onToggleAdvanced,
}: Props) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex gap-2 w-full">
      {/* ปุ่ม Advanced Filter */}
      <button
        onClick={onToggleAdvanced}
        className="btn btn-outline border-base-300 text-base-content"
      >
        <SlidersHorizontal className="w-4 h-4 mr-2" />
        Advanced Filter
      </button>

      {/* ช่อง Search */}
      <input
        type="text"
        placeholder="Search by Title"
        className="input input-bordered w-full"
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          onSearchChange?.(value);
        }}
      />
    </div>
  );
}
