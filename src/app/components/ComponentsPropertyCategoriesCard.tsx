export default function PropertyCategoriesCard() {
  const categories = [
    { name: "Apartment", count: 6 },
    { name: "Condo", count: 12 },
    { name: "Family House", count: 8 },
    { name: "Modern Villa", count: 26 },
    { name: "Town House", count: 89 },
  ];

  return (
    <div className="bg-base-100 border border-base-300 rounded-box p-4 shadow-sm">
      <h2 className="text-base font-semibold mb-3">Categories Property</h2>
      <ul className="space-y-2 text-sm">
        {categories.map((item) => (
          <li key={item.name} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-base-content/60">▶</span>
              <span>{item.name}</span>
            </div>
            <span className="text-base-content/60">
              {item.count} properties
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
