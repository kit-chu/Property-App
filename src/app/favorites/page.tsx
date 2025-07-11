"use client";

import { useState } from "react";
import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

const mockFavorites = [
  {
    id: 1,
    title: "Gorgeous Apartment Building",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "April 10, 2024",
  },
  {
    id: 2,
    title: "Mountain Mist Retreat, Aspen",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "April 10, 2024",
  },
  {
    id: 3,
    title: "Lakeview Haven, Lake Tahoe",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "April 10, 2024",
  },
  {
    id: 4,
    title: "Coastal Serenity Cottage",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "April 10, 2024",
  },
  {
    id: 5,
    title: "Sunset Heights Estate",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "April 10, 2024",
  },
  {
    id: 6,
    title: "Modern Villa in Spain",
    image: "https://via.placeholder.com/150",
    price: "$12,000",
    date: "April 10, 2024",
  },
];

export default function FavoritesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(mockFavorites.length / itemsPerPage);

  const currentData = mockFavorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow  hidden xl:block">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow p-4 h-[70vh] flex flex-col">
          <h2 className="text-lg font-bold mb-4">My Favorites</h2>

          {/* Scrollable Table */}
          <div className="overflow-y-auto flex-1">
            <table className="table w-full">
              <thead className="bg-base-300 sticky top-0 z-10">
                <tr>
                  <th>Listing</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((fav) => (
                  <tr key={fav.id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={fav.image}
                          alt={fav.title}
                          className="w-20 h-14 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium">{fav.title}</p>
                          <p className="text-primary font-bold">{fav.price}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-sm text-gray-600">{fav.date}</span>
                    </td>
                    <td className="space-x-2 text-sm">
                      <button className="btn btn-xs">Edit</button>
                      <button className="btn btn-xs btn-secondary">Sold</button>
                      <button className="btn btn-xs btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`btn btn-sm ${
                  currentPage === i + 1 ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
