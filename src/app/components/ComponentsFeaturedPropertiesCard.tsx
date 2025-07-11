"use client";
import Image from "next/image";

export default function FeaturedPropertiesCard() {
  return (
    <div className="bg-base-100 border border-base-300 rounded-box p-4 shadow-sm">
      <h2 className="text-base font-semibold mb-3">Featured Properties</h2>
      <div className="relative rounded-box overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="property"
          width={400}
          height={200}
          className="object-cover w-full h-44 rounded-box"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="badge badge-neutral text-xs">Featured</span>
          <span className="badge badge-error text-xs">For Rent</span>
        </div>
        <div className="absolute bottom-2 left-2 text-white">
          <p className="font-bold text-lg">$14000/mo</p>
          <p className="text-sm">Renovated Apartment</p>
        </div>
      </div>

      {/* จุด Slider */}
      <div className="flex justify-center mt-3 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-neutral" : "bg-base-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
