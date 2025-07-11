"use client";

import { useState } from "react";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import ComponentsPropertyCardGrid from "@/app/components/ComponentsPropertyCardGrid";
import ComponentsPropertyFilterSidebar from "@/app/components/ComponentsPropertyFilterSidebar";
import ComponentsPriceRangeSlider from "@/app/components/ComponentsPriceRangeSlider";
import ComponentsFeaturedPropertiesCard from "@/app/components/ComponentsFeaturedPropertiesCard";
import ComponentsPropertyCategoriesCard from "@/app/components/ComponentsPropertyCategoriesCard";
import ComponentsRecentlyViewedCard from "@/app/components/ComponentsRecentlyViewedCard";
import ComponentsPagination from "@/app/components/ComponentsPagination";
import ComponentsSearchHeader from "@/app/components/ComponentsSearchHeader";

export default function ListPage() {
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
    <div className="p-6 md:p-10 min-h-screen max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs text-base-content/70 mb-3">
        <ul>
          <li>
            <a href="/" className="text-base-content">
              Home
            </a>
          </li>
          <li>
            <span className="text-error">รายการอสังหาริมทรัพย์</span>
          </li>
        </ul>
      </div>

      {/* หัวข้อ + ปุ่มสลับ */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-base-content">
          รายการอสังหาริมทรัพย์
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`btn btn-sm ${
              view === "grid"
                ? "bg-neutral text-white"
                : "bg-white text-base-content"
            }`}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`btn btn-sm ${
              view === "list"
                ? "bg-neutral text-white"
                : "bg-white text-base-content"
            }`}
          >
            <ListIcon size={16} />
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar ซ้าย */}
        <div className="md:col-span-1 space-y-6">
          <ComponentsPropertyFilterSidebar />
          <ComponentsFeaturedPropertiesCard />
          <ComponentsPropertyCategoriesCard />
          <ComponentsRecentlyViewedCard />
        </div>

        {/* Content ด้านขวา */}
        <div className="md:col-span-3 space-y-6">
          {/* รายการอสังหาฯ */}
          <div
            className={`grid gap-4 ${
              view === "grid" ? "md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {properties.map((item) => (
              <ComponentsPropertyCardGrid key={item.id} {...item} view={view} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <ComponentsPagination
              totalPages={29}
              onPageChange={(page) => console.log("เปลี่ยนเป็นหน้า", page)}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
