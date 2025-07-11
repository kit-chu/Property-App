"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Range, getTrackBackground } from "react-range";

const STEP = 1000;
const MIN = 0;
const MAX = 100000;

export function ComponentsSearch() {
  const typeProperty = [
    { label: "บ้าน", value: "house" },
    { label: "คอนโด", value: "condo" },
    { label: "ที่ดิน", value: "land" },
    { label: "อาคารพาณิชย์", value: "commercial" },
    { label: "โรงงาน", value: "factory" },
    { label: "โกดัง", value: "warehouse" },
    { label: "อพาร์ทเมนท์", value: "apartment" },
    { label: "ทาวน์เฮ้าส์", value: "townhouse" },
    { label: "วิลล่า", value: "villa" },
    { label: "รีสอร์ท", value: "resort" },
  ];
  const typeMarket = [
    { label: "ขาย", value: "sell" },
    { label: "เช่า", value: "rent" },
    { label: "ขาย/เช่า", value: "sell-rent" },
  ];

  const [selectedType, setSelectedType] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [priceRange, setPriceRange] = useState([10000, 20000]);

  return (
    <div className="w-full max-w-5xl p-5 bg-white rounded-box shadow flex flex-row gap-4 items-center relative flex-wrap">
      {/* Market Type */}
      <select
        className="select select-bordered select-secondary w-full sm:w-28 text-white focus:outline-none bg-secondary"
        value={selectedMarket}
        onChange={(e) => setSelectedMarket(e.target.value)}
      >
        <option disabled value="">
          Buy
        </option>
        {typeMarket.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder='เช่น "บ้านมือสอง พระราม 2 ใกล้ BTS"'
        className="input input-md flex-grow input-bordered input-primary text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      {/* Property Type */}
      <select
        className="select select-bordered select-neutral w-40 text-base-content focus:outline-none"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option disabled value="">
          เลือกประเภทอสังหาฯ
        </option>
        {typeProperty.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* ปุ่มแสดงช่วงราคา */}
      <div className="relative">
        <button
          className="btn btn-outline w-32 btn-secondary btn-md text-base"
          onClick={() => setShowPrice((prev) => !prev)}
        >
          ราคา
        </button>

        {showPrice && (
          <div className="absolute z-10 bg-white shadow-lg rounded-box w-72 p-4 top-full mt-2">
            <h2 className="font-semibold text-center mb-2 text-black">
              ช่วงราคา
            </h2>
            <div className="flex justify-between text-primary font-medium mb-3">
              <span>฿{priceRange[0].toLocaleString()}</span>
              <span>฿{priceRange[1].toLocaleString()}</span>
            </div>

            <Range
              values={priceRange}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setPriceRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 rounded bg-gray-300"
                  style={{
                    background: getTrackBackground({
                      values: priceRange,
                      colors: ["#ccc", "#f87171", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-5 h-5 bg-red-500 rounded-full shadow border-4 border-white"
                />
              )}
            />
          </div>
        )}
      </div>

      {/* ปุ่มค้นหา */}
      <button className="btn btn-primary btn-square btn-md w-20">
        <MagnifyingGlassIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
