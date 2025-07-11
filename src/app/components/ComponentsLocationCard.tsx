import Image from "next/image";

interface LocationCardProps {
  imageUrl: string;
  location: string;
  total: number;
}

export default function ComponentsLocationCard({
  imageUrl,
  location,
  total,
}: LocationCardProps) {
  return (
    <div className="card w-72 bg-base-100 border border-base-300 shadow-md rounded-xl transition hover:shadow-xl hover:scale-[1.02] cursor-pointer">
      <figure className="rounded-t-xl overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src={imageUrl}
            alt={location}
            width={400}
            height={200}
            className="object-cover w-full h-48"
          />
        </div>
      </figure>
      <div className="card-body items-center text-center py-4">
        <h2 className="font-semibold text-lg text-base-content">{location}</h2>
        <p className="text-sm text-base-content/60">{total} Properties</p>
      </div>
    </div>
  );
}
