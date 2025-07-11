"use client";

import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 200000;
const STEP = 5000;

export default function ComponentsPriceRangeSlider() {
  const [values, setValues] = useState([10000, 20000]);

  return (
    <div className="text-sm font-medium text-primary mt-2">
      {/* แสดงช่วงราคา */}
      <div className="flex justify-between mb-2">
        <span>฿{values[0].toLocaleString()}</span>
        <span>฿{values[1].toLocaleString()}</span>
      </div>

      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={setValues}
        renderTrack={({ props, children }) => {
          // 🧼 ลบ key ออกจาก props (ถ้ามี)
          const { key, ...restProps } = props as any;

          return (
            <div
              {...restProps}
              className="w-full h-2 rounded-full"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#ddd", "#f87171", "#ddd"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, index }) => {
          const { key, ...restProps } = props as any;
          return (
            <div
              key={index} // ✅ ใส่ key ด้วย index
              {...restProps}
              className="w-4 h-4 bg-error rounded-full shadow-md outline-none"
            />
          );
        }}
      />
    </div>
  );
}
