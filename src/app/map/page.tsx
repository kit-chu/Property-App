"use client";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import ComponentsPagination from "@/app/components/ComponentsPagination";
import ComponentsPropertyCardGrid from "@/app/components/ComponentsPropertyCardGrid";
import ComponentsSearchHeader from "@/app/components/ComponentsSearchHeader";
import ComponentsMapView from "@/app/components/ComponentsMapView";
import ComponentsSearchFilter from "@/app/components/ComponentsSearchFilter";

export default function MapPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const properties = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 13000 + index * 500,
    isFeatured: index % 2 === 0,
    status: index % 3 === 0 ? ("For Rent" as const) : ("For Sale" as const),
    category: index % 2 === 0 ? "บ้านเดี่ยว" : "คอนโด",
    title: `บ้านสวย ${index + 1}`,
    location: "ถนนสุขุมวิท, กรุงเทพมหานคร",
    beds: 2,
    baths: 1,
    sqft: 120 + index * 10,
    agentName: "คุณสมชาย",
    agentAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    postedAt: "1 วันที่แล้ว",
  }));

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="mt-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center  gap-2">
          {/* ส่วนค้นหา */}
          <div className="w-full md:w-1/2 flex justify-end pl-8">
            <ComponentsSearchFilter
              onSearchChange={(val) => console.log("ค้นหา:", val)}
              onToggleAdvanced={() => console.log("กด Advanced Filter")}
            />
          </div>

          {/* ส่วนสถานะและการเรียงลำดับ */}
          <div className="w-full md:w-1/2 flex justify-end pr-8">
            <ComponentsSearchHeader
              totalResults={properties.length}
              status="All Status"
              sort="Featured All"
              onStatusChange={(val) => console.log("เลือกสถานะ:", val)}
              onSortChange={(val) => console.log("เรียงโดย:", val)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left (Map) */}
          <div className="w-1/2 h-full border-r border-base-300 flex pl-4">
            <ComponentsMapView
              listings={properties.map((p) => ({
                id: String(p.id),
                location: { lat: 13.7563, lng: 100.5018 }, // หรือใส่ lat/lng จริง
              }))}
              selectedId={null}
              onSelect={(id) => console.log("เลือก:", id)}
            />
          </div>

          {/* Right (Property List) */}
          <div className="w-full md:w-1/2 flex flex-col max-h-full">
            {/* Scrollable List */}
            <div className="overflow-y-auto flex-1 px-4 pb-4">
              <div
                className={`${
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                    : "flex flex-col space-y-4"
                }`}
              >
                {properties.map((item) => (
                  <ComponentsPropertyCardGrid
                    key={item.id}
                    {...item}
                    view={view}
                  />
                ))}
              </div>
            </div>
            {/* Pagination Fixed Bottom */}
            <div className="p-1 border-t border-base-300 bg-base-100 sticky bottom-0 z-10 max-w-4xl mx-auto justify-center">
              <ComponentsPagination
                totalPages={29}
                onPageChange={(page) => console.log("เปลี่ยนเป็นหน้า", page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
