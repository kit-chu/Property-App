import Image from "next/image";

export default function RecentlyViewedCard() {
  const items = [
    {
      title: "Luxury Family Home",
      price: 19000,
      beds: 4,
      baths: 2,
      sqft: 5280,
      image: "https://source.unsplash.com/random/100x80?home1",
    },
    {
      title: "Luxury Family Home",
      price: 12000,
      beds: 4,
      baths: 2,
      sqft: 5280,
      image: "https://source.unsplash.com/random/100x80?home2",
    },
    {
      title: "Renovated Apartment",
      price: 11000,
      beds: 4,
      baths: 2,
      sqft: 5280,
      image: "https://source.unsplash.com/random/100x80?home3",
    },
  ];

  return (
    <div className="bg-base-100 border border-base-300 rounded-box p-4 shadow-sm">
      <h2 className="text-base font-semibold mb-3">Recently Viewed</h2>
      <ul className="space-y-4 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="rounded w-20 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-error font-bold">
                ฿{item.price.toLocaleString()}/mo
              </p>
              <p className="text-xs text-base-content/60">
                Beds:{item.beds} Baths:{item.baths} SqFt:{item.sqft}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
