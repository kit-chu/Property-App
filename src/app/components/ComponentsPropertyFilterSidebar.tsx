import { useState } from "react";
import { ChevronDown, ChevronRight, Settings, ChevronUp } from "lucide-react";
import ComponentsPriceRangeSlider from "./ComponentsPriceRangeSlider";

export default function ComponentsPropertyFilterSidebar() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showPriceSlider, setShowPriceSlider] = useState(false);

  const toggleAdvanced = () => setShowAdvanced((prev) => !prev);
  const togglePriceSlider = () => setShowPriceSlider((prev) => !prev);

  const features = [
    { label: "แอร์", icon: "❄️" },
    { label: "เครื่องซักผ้า", icon: "🛋" },
    { label: "เครื่องทำน้ำอุ่น", icon: "🔥" },
    { label: "Wi-Fi", icon: "📡" },
    { label: "สระว่ายน้ำ", icon: "🏊" },
    { label: "ที่จอดรถ", icon: "🚗" },
    { label: "ฟิตเนส", icon: "🏋️" },
    { label: "กล้องวงจรปิด", icon: "📷" },
  ];

  return (
    <div className="bg-base-100 border border-base-300 p-5 rounded-box space-y-4 text-sm">
      <input
        type="text"
        placeholder="ค้นหา เช่น บ้านมือสอง"
        className="input input-bordered input-sm w-full"
      />

      <select className="select select-bordered select-sm w-full">
        <option>ทำเล</option>
        <option>กรุงเทพฯ</option>
        <option>เชียงใหม่</option>
      </select>

      <select className="select select-bordered select-sm w-full">
        <option>ประเภท</option>
        <option>บ้านเดี่ยว</option>
        <option>คอนโด</option>
      </select>

      {/* 👉 เปลี่ยนจาก select เป็นปุ่ม */}
      <div className="border border-base-300 rounded-box">
        <button
          onClick={togglePriceSlider}
          className="w-full flex justify-between items-center px-4 py-2"
        >
          <span className="text-sm font-medium text-base-content">
            ช่วงราคา
          </span>
          {showPriceSlider ? (
            <ChevronUp className="w-4 h-4 text-base-content/70" />
          ) : (
            <ChevronDown className="w-4 h-4 text-base-content/70" />
          )}
        </button>
        {showPriceSlider && (
          <div className="p-4">
            <ComponentsPriceRangeSlider />
          </div>
        )}
      </div>

      <select className="select select-bordered select-sm w-full">
        <option>ห้องน้ำ</option>
      </select>
      <select className="select select-bordered select-sm w-full">
        <option>ห้องนอน</option>
      </select>
      <select className="select select-bordered select-sm w-full">
        <option>ที่จอดรถ</option>
      </select>
      <select className="select select-bordered select-sm w-full">
        <option>ปีที่สร้าง</option>
      </select>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="พื้นที่ต่ำสุด"
          className="input input-bordered input-sm w-full"
        />
        <input
          type="text"
          placeholder="พื้นที่สูงสุด"
          className="input input-bordered input-sm w-full"
        />
      </div>

      {/* 🔽 คุณสมบัติเพิ่มเติม */}
      <div className="mt-2">
        <button
          onClick={toggleAdvanced}
          className="text-error text-sm flex items-center gap-1 font-semibold"
        >
          <Settings className="w-4 h-4" />
          คุณสมบัติเพิ่มเติม
          {showAdvanced ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {showAdvanced && (
          <div className="grid grid-cols-2 gap-2 mt-3">
            {features.map((item) => (
              <label key={item.label} className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span>
                  {item.icon} {item.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button className="btn btn-error btn-sm w-full mt-4">ล้างตัวกรอง</button>
    </div>
  );
}
