import React from "react";
import { Star } from "lucide-react";

type AgentCardProps = {
  avatarUrl: string;
  name: string;
  position?: string;
  area?: string;
  rating?: number;
  propertyCount?: number;
};

export default function ComponentsAgentCard({
  avatarUrl,
  name,
  position,
  area,
  rating,
  propertyCount,
}: AgentCardProps) {
  return (
    <div className="bg-base-100 rounded-xl border border-base-300 p-5 text-center hover:scale-[1.02] transition-all duration-300 shadow-sm">
      <img
        src={avatarUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />
      <h3 className="text-lg font-semibold text-base-content">{name}</h3>
      {position && <p className="text-sm text-base-content/70">{position}</p>}
      {area && (
        <p className="text-sm text-base-content/50 mt-1">ดูแล: {area}</p>
      )}
      {(rating || propertyCount) && (
        <div className="flex items-center justify-center gap-3 text-sm text-base-content/70 mt-3">
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{rating.toFixed(1)} / 5</span>
            </div>
          )}
          {propertyCount !== undefined && <span>{propertyCount} รายการ</span>}
        </div>
      )}
    </div>
  );
}
