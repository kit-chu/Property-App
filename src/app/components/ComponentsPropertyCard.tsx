import { HeartIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Bed, ShowerHead, Ruler } from "lucide-react";

interface ComponentsPropertyCard {
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
}

export default function PropertyCard({
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
}: ComponentsPropertyCard) {
  return (
    <div
      className="card w-full max-w-[380px] bg-base-100 shadow-xl border rounded-box 
    hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer"
    >
      <figure className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="object-cover h-60 w-full rounded-t-box"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {isFeatured && (
            <span className="badge badge-neutral text-xs">Featured</span>
          )}
          <span className="badge badge-error text-xs">{status}</span>
        </div>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button className="btn btn-sm btn-circle bg-white/80 hover:bg-white">
            <ArrowPathIcon className="w-4 h-4 text-gray-700" />
          </button>
          <button className="btn btn-sm btn-circle bg-white/80 hover:bg-white">
            <HeartIcon className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-lg bg-black/70 px-3 py-1 rounded">
          ${price.toLocaleString()}{" "}
          <span className="text-sm font-normal">/mo</span>
        </div>
      </figure>

      <div className="card-body px-5 pt-4 pb-2 items-start">
        <span className="text-sm text-error font-bold">{category}</span>
        <h2 className="card-title text-base font-bold text-black">{title}</h2>
        <p className="text-sm text-gray-500 mt-1 text-left">{location}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-3 text-black">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-500" />
            <span>ห้องนอน: {beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <ShowerHead className="w-4 h-4 text-gray-500" />
            <span>ห้องน้ำ: {baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4 text-gray-500" />
            <span>ขนาด: {sqft} ตร.ม.</span>
          </div>
        </div>
      </div>

      <div className="divider m-0" />

      <div className="flex items-center justify-between p-4">
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
  );
}
