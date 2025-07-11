// ComponentsFeatureCard.tsx

import React from "react";

// ✅ ประกาศและ export interface สำหรับ props
export interface ComponentsFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ✅ ใช้ props แบบ type ชัดเจน
export default function ComponentsFeatureCard({
  icon,
  title,
  description,
}: ComponentsFeatureCardProps) {
  return (
    <div className="rounded-box p-6 text-center bg-base-100 text-base-content group cursor-default transition-all duration-300 hover:scale-105">
      <div
        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center 
        bg-primary/10 group-hover:bg-primary transition-all duration-300"
      >
        <div className="w-12 h-12 text-primary group-hover:text-white transition-all duration-300 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-1 group-hover:text-primary">
        {title}
      </h3>
      <p className="text-sm opacity-80 group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
}
