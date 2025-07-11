// components/ComponentsPropertyCardList.tsx
"use client";

import Image from "next/image";
import { Bed, ShowerHead, Ruler } from "lucide-react";
import { HeartIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

interface ComponentsPropertyCardListProps {
  imageUrl: string;
  price: number;
  isFeatured?: boolean;
  status: "For Sale" | "For Rent";
  category: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  agentName: string;
  agentAvatar: string;
  postedAt: string;
  view: "list" | "grid";
}

export default function ComponentsPropertyCardList({
  imageUrl,
  price,
  isFeatured,
  status,
  category,
  title,
  location,
  beds,
  baths,
  sqft,
  agentName,
  agentAvatar,
  postedAt,
  view,
}: ComponentsPropertyCardListProps) {
  return view === "list" ? (
    <div className="flex bg-base-100 border border-base-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="relative w-[260px] h-[180px] flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute top-2 left-2 flex gap-2">
          {isFeatured && (
            <span className="badge badge-neutral text-xs">Featured</span>
          )}
          <span className="badge badge-error text-xs">{status}</span>
        </div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/70 px-3 py-1 rounded">
          ${price.toLocaleString()}{" "}
          <span className="text-xs font-normal">/mo</span>
        </div>
        <div className="absolute bottom-2 right-2 flex gap-1">
          <button className="btn btn-xs btn-circle bg-white/80 hover:bg-white">
            <ArrowPathIcon className="w-4 h-4 text-gray-700" />
          </button>
          <button className="btn btn-xs btn-circle bg-white/80 hover:bg-white">
            <HeartIcon className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <span className="text-sm text-error font-semibold">{category}</span>
          <h3 className="font-bold text-base mt-1">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          <div className="flex flex-wrap gap-4 text-sm mt-3 text-gray-700">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-gray-500" /> {beds} Beds
            </div>
            <div className="flex items-center gap-1">
              <ShowerHead className="w-4 h-4 text-gray-500" /> {baths} Baths
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="w-4 h-4 text-gray-500" /> {sqft} ตร.ม.
            </div>
          </div>
        </div>
        <div className="divider my-2" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={agentAvatar}
              alt={agentName}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-gray-500">{agentName}</span>
          </div>
          <span className="text-sm text-gray-500">{postedAt}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="card bg-base-100 shadow-md rounded-box overflow-hidden border hover:shadow-lg transition cursor-pointer">
      <figure className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="object-cover w-full h-56"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {isFeatured && (
            <span className="badge badge-neutral text-xs">Featured</span>
          )}
          <span className="badge badge-error text-xs">{status}</span>
        </div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/70 px-3 py-1 rounded">
          ${price.toLocaleString()}{" "}
          <span className="text-xs font-normal">/mo</span>
        </div>
        <div className="absolute bottom-2 right-2 flex gap-1">
          <button className="btn btn-xs btn-circle bg-white/80 hover:bg-white">
            <ArrowPathIcon className="w-4 h-4 text-gray-700" />
          </button>
          <button className="btn btn-xs btn-circle bg-white/80 hover:bg-white">
            <HeartIcon className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </figure>
      <div className="p-4 space-y-1">
        <span className="text-sm text-error font-bold">{category}</span>
        <h2 className="font-semibold text-base">{title}</h2>
        <p className="text-sm text-base-content/70">{location}</p>
        <div className="flex flex-wrap gap-x-4 text-sm text-base-content/80 mt-2">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-500" /> {beds} ห้องนอน
          </div>
          <div className="flex items-center gap-1">
            <ShowerHead className="w-4 h-4 text-gray-500" /> {baths} ห้องน้ำ
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4 text-gray-500" /> {sqft} ตร.ม.
          </div>
        </div>
      </div>
      <div className="divider my-0" />
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={agentAvatar}
            alt={agentName}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm text-base-content/70">{agentName}</span>
        </div>
        <span className="text-sm text-base-content/60">{postedAt}</span>
      </div>
    </div>
  );
}
